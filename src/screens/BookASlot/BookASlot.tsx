import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Controller, useForm } from 'react-hook-form';

import { ButtonDefault } from 'components/ButtonDefault/ButtonDefault';
import ScreenHeader from 'components/ScreenHeader/ScreenHeader';
import { TextField } from 'components/TextField';
import { Checkbox } from 'components/Checkbox';
import { PhoneNumberInput } from 'components/PhoneNumberInput';

import styles from './styles';

const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,4}$/i;

const namePattern = /^[-а-яА-Я]+(\s+[-а-яА-Я]+)*$/;

export const BookASlot = () => {
  const { top, bottom } = useSafeAreaInsets();
  const {
    control,
    setError,
    clearErrors,
    formState: { isDirty, isValid, errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  return (
    <View style={[styles.screen, { paddingTop: top }]}>
      <StatusBar />
      <LinearGradient
        colors={['rgba(246, 247, 250, 0.2)', 'rgba(66, 63, 255, 0.1)']}
        start={{ x: 0.1, y: 0.4 }}
        end={{ x: 1, y: 0.8 }}
        style={[styles.linearGradient, { paddingBottom: bottom + 20 }]}>
        <ScreenHeader onBack={() => undefined} />
        <View style={{ flex: 1 }}>
          <View style={styles.pageTitleContainer}>
            <Text style={styles.pageTitle}>Забронировать слот</Text>
            <Text style={styles.pageTitleDescription}>
              Оставьте контактные данные, и мы с вами свяжемся в ближайший час.
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
              render={({
                field: { onChange, value },
                fieldState: { isDirty },
              }) => (
                <PhoneNumberInput
                  value={value}
                  onChange={onChange}
                  placeholder="Номер телефона"
                  showCountryCode={isDirty}
                />
              )}
            />
          </View>
        </View>
        <View>
          <ButtonDefault
            text="Отправить"
            onPress={() => undefined}
            style={styles.submitButton}
            disabled={!isDirty || !isValid}
          />
          <View>
            <Checkbox checkboxText="Я даю согласие на обработку своих данных." />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
