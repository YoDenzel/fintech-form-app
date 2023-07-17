import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Controller, useForm } from 'react-hook-form';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native-gesture-handler';

import { ButtonDefault } from 'components/ButtonDefault';
import ScreenHeader from 'components/ScreenHeader';
import { TextField } from 'components/TextField';
import { Checkbox } from 'components/Checkbox';
import { PhoneNumberInput } from 'components/PhoneNumberInput';
import { RootStackParamList } from 'navigation/types';

import styles from './styles';
import { useState } from 'react';

const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,4}$/i;

const namePattern = /^[-а-яА-Я]+(\s+[-а-яА-Я]+)*$/;

export function BookASlot({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'BookASlot'>) {
  const { top, bottom } = useSafeAreaInsets();
  const {
    control,
    setError,
    clearErrors,
    formState: { isDirty, isValid, errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      policyAgreement: false,
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = handleSubmit((data) => {
    setIsLoading(true);
    new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      setIsLoading(false);
      navigation.navigate('Submitted');
    });
  });

  return (
    <View style={[styles.screen, { paddingTop: top }]}>
      <LinearGradient
        colors={['rgba(246, 247, 250, 0.2)', 'rgba(66, 63, 255, 0.1)']}
        start={{ x: 0.1, y: 0.4 }}
        end={{ x: 1, y: 0.8 }}
        style={[styles.linearGradient, { paddingBottom: bottom + 20 }]}>
        <ScreenHeader onBack={() => undefined} />
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={styles.contentContainer}>
            <View style={styles.pageTitleContainer}>
              <Text style={styles.pageTitle}>Забронировать слот</Text>
              <Text style={styles.pageTitleDescription}>
                Оставьте контактные данные, и мы с вами свяжемся в ближайший
                час.
              </Text>
            </View>
            <View>
              <Controller
                control={control}
                name="name"
                rules={{
                  minLength: 3,
                  maxLength: 10,
                  pattern: namePattern,
                  required: true,
                }}
                render={({
                  field: { onChange, value },
                  fieldState: { isDirty: isFieldDirty, error },
                }) => (
                  <TextField
                    fieldName="Имя"
                    maxLength={10}
                    onChange={(v) => {
                      if (v.length < 3 || !namePattern.test(v)) {
                        setError('name', {
                          message: 'Введите корректное имя',
                        });
                      } else {
                        clearErrors('name');
                      }
                      onChange(v);
                    }}
                    value={value}
                    error={
                      error?.message && isFieldDirty ? error.message : undefined
                    }
                  />
                )}
              />
              <Controller
                control={control}
                name="email"
                rules={{
                  minLength: 10,
                  maxLength: 30,
                  pattern: emailPattern,
                  required: true,
                }}
                render={({
                  field: { onChange, value },
                  fieldState: { isDirty: isFieldDirty, error },
                }) => (
                  <TextField
                    fieldName="Email"
                    onChange={(v) => {
                      if (v.length < 10 || !emailPattern.test(v)) {
                        setError('email', {
                          message: 'Введите корректный e-mail',
                        });
                      } else {
                        clearErrors('email');
                      }
                      onChange(v);
                    }}
                    value={value}
                    error={
                      isFieldDirty && error?.message ? error.message : undefined
                    }
                  />
                )}
              />
              <Controller
                control={control}
                name="phone"
                rules={{
                  minLength: 11,
                  maxLength: 20,
                  required: true,
                }}
                render={({
                  field: { onChange, value },
                  fieldState: { isDirty, error },
                }) => (
                  <PhoneNumberInput
                    value={value}
                    onChange={(v) => {
                      if (v.length < 11) {
                        setError('phone', {
                          message: 'Введите корректный номер телефона',
                        });
                      } else {
                        clearErrors('phone');
                      }
                      onChange(v);
                    }}
                    maxLength={20}
                    placeholder="Номер телефона"
                    showCountryCode={isDirty}
                    mask={'(999) 999-99-99-99-9'}
                    error={error?.message}
                  />
                )}
              />
            </View>
          </View>
          <View style={styles.submitButtonContainer}>
            <ButtonDefault
              text="Отправить"
              onPress={handleSubmit(onSubmit)}
              style={styles.submitButton}
              submitting={isLoading}
              disabled={!isDirty || !isValid}
            />
            <View>
              <Controller
                name="policyAgreement"
                rules={{ required: true }}
                control={control}
                render={({ field: { onChange } }) => (
                  <Checkbox
                    checkboxText="Я даю согласие на обработку своих данных."
                    onChecked={onChange}
                  />
                )}
              />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
