import { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {
  formatIncompletePhoneNumber,
  parseIncompletePhoneNumber,
} from 'libphonenumber-js';
import MaskInput from 'react-native-mask-input';

import styles from './styles';

export const PhoneNumberInput = ({
  placeholder,
  showErrorBox = true,
  onChange,
  value,
  onBlur,
  errorMsg,
  maxLength,
  showCountryCode,
}: TPhoneField) => {
  const [visibleCountries, setVisibleCountries] = useState(false);
  const [country, setCountry] = useState(7);

  const errorOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(errorMsg ? 1 : 0),
    } as ViewStyle;
  }, [errorMsg]);

  const handleChangePhone =
    (onChangeText?: (phone: string) => void) => (phone: string) => {
      if (phone) {
        const formatNumber = formatIncompletePhoneNumber(
          parseIncompletePhoneNumber(phone).replace(
            phone,
            `+${country}${phone}`,
          ),
        );

        if (formatNumber === `+${country}`) {
          onChangeText && onChangeText(phone);
        } else {
          onChangeText && onChangeText(formatNumber);
        }
      } else {
        onChangeText && onChangeText(phone);
      }
    };

  const onShowCountries = () => {
    setVisibleCountries(true);
  };

  const onChangeCountry = (country: number) => {
    setCountry(country);
    setVisibleCountries(false);
  };

  const onCloseCountries = () => {
    setVisibleCountries(false);
  };

  return (
    <View style={styles.constainer}>
      <View style={[styles.body, errorMsg ? styles.bodyError : null]}>
        {showCountryCode && (
          <TouchableOpacity
            onPress={onShowCountries}
            style={[styles.containerRegion]}>
            <Text style={styles.regionTitle}>+{country}</Text>
          </TouchableOpacity>
        )}
        <View style={styles.inputWrap}>
          <MaskInput
            style={styles.input}
            returnKeyType="send"
            value={value}
            placeholder={placeholder}
            keyboardType="phone-pad"
            onChangeText={handleChangePhone(onChange)}
            onBlur={onBlur}
            maxLength={maxLength}
            placeholderTextColor="#1E1E20"
          />
        </View>
      </View>
      {showErrorBox && (
        <View style={styles.errorWrap}>
          {errorMsg && (
            <View style={styles.errorTextWrap}>
              <Animated.Text style={[styles.errorText, errorOpacityStyle]}>
                {errorMsg}
              </Animated.Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

type TPhoneField = {
  placeholder?: string;
  showErrorBox?: boolean;
  style?: StyleProp<TextStyle>;
  value: string;
  onChange: (...event: any[]) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  errorMsg?: string;
  maxLength?: number;
  showCountryCode?: boolean;
};
