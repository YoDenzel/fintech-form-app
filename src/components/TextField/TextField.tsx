import { useState } from 'react';
import { StyleProp, Text, TextInput, ViewStyle } from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import styles from './styles';

export const TextField = ({
  fieldName,
  secureTextEntry,
  autoCapitalize,
  keyboardType,
  keyboardAppearance,
  placeholderTextColor,
  maxLength,
  returnKeyType,
  onSubmitEditing,
  onChange,
  value,
  placeholder,
  blurOnSubmit,
  error,
}: ProfileTextInputProps) => {
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

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <Animated.View style={[styles.wrapper]}>
      <Animated.View style={[styles.cont, contStyle]}>
        <Animated.Text style={[styles.fieldName, fieldNameStyle]}>
          {fieldName}
        </Animated.Text>
        <TextInput
          style={styles.input}
          returnKeyType={returnKeyType}
          value={value}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          keyboardAppearance={keyboardAppearance}
          onChangeText={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSubmitEditing={onSubmitEditing}
          placeholderTextColor={placeholderTextColor}
          blurOnSubmit={blurOnSubmit}
          placeholder={placeholder}
        />
      </Animated.View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </Animated.View>
  );
};

type ProfileTextInputProps = {
  value: string;
  onChange: (v: string) => void;
  fieldName: string;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  keyboardAppearance?: 'dark' | 'light';
  maxLength?: number;
  showErrorBox?: boolean;
  showResetButton?: boolean;
  placeholderTextColor?: string;
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  onSubmitEditing?: (...args: any[]) => any;
  placeholder?: string;
  blurOnSubmit?: boolean;
  error?: string;
};
