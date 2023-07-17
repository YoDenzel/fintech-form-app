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
  Keyboard,
} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {
  formatIncompletePhoneNumber,
  parseIncompletePhoneNumber,
} from 'libphonenumber-js';
import { MaskedTextInput } from 'react-native-mask-text';

import { PhoneCountriesDropdown } from 'components/PhoneCountriesDropdown';

import styles from './styles';

export const PhoneNumberInput = ({
  placeholder,
  onChange,
  value,
  onBlur,
  maxLength,
  showCountryCode,
  error,
  mask,
}: TPhoneField) => {
  const [visibleCountries, setVisibleCountries] = useState(false);
  const [country, setCountry] = useState('7');
  const [focused, setFocused] = useState(false);

  const fieldNameStyle = useAnimatedStyle(() => {
    const translateY = interpolate(value || focused ? 0 : 1, [0, 1], [-12, 0]);
    const fontSize = interpolate(value || focused ? 0 : 1, [0, 1], [12, 20]);
    const color = interpolateColor(
      value || focused ? 0 : 1,
      [0, 1],
      ['#60626D', '#1E1E20'],
    );
    return {
      transform: [{ translateY: withTiming(translateY) }],
      fontSize: withTiming(fontSize),
      color: withTiming(color),
    };
  });

  const handleChangePhone =
    (onChangeText?: (phone: string) => void) => (phone: string) => {
      if (phone) {
        const formatNumber = formatIncompletePhoneNumber(
          parseIncompletePhoneNumber(phone).replace(phone, `${phone}`),
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
    setVisibleCountries((value) => !value);
    Keyboard.dismiss();
  };

  const onChangeCountry = (country: string) => {
    setCountry(country);
    setVisibleCountries(false);
  };

  const contStyle = useAnimatedStyle(() => {
    let style;
    if (error) {
      style = {
        borderColor: '#FF450B',
        borderWidth: 1,
      };
    } else if (focused) {
      style = {
        borderColor: '#3F8AE0',
        borderWidth: 1,
      };
    } else {
      style = {
        borderWidth: 0,
      };
    }
    return {
      ...style,
    };
  });

  return (
    <View style={styles.container}>
      <View style={[styles.body]}>
        {showCountryCode && (
          <>
            <TouchableOpacity
              onPress={onShowCountries}
              style={[styles.containerRegion]}>
              <Text style={styles.regionTitle}>+{country}</Text>
            </TouchableOpacity>
            <PhoneCountriesDropdown
              visibleCountries={visibleCountries}
              onChangeCountry={onChangeCountry}
            />
          </>
        )}
        <Animated.View
          style={[
            styles.inputWrap,
            contStyle,
            !showCountryCode && styles.inputRightBorder,
          ]}>
          {!showCountryCode && (
            <Animated.Text style={[styles.fieldName, fieldNameStyle]}>
              {placeholder}
            </Animated.Text>
          )}
          <MaskedTextInput
            style={styles.input}
            returnKeyType="send"
            value={value}
            keyboardType="phone-pad"
            onChangeText={handleChangePhone(onChange)}
            onBlur={(e) => {
              setFocused(false);
              onBlur && onBlur(e);
            }}
            maxLength={maxLength}
            onFocus={() => setFocused(true)}
            mask={mask}
          />
        </Animated.View>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

type TPhoneField = {
  placeholder?: string;
  style?: StyleProp<TextStyle>;
  value: string;
  onChange: (...event: any[]) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  maxLength?: number;
  showCountryCode?: boolean;
  error?: string;
  mask?: string;
};
