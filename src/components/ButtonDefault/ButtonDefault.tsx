import { ReactNode } from 'react';
import {
  TouchableOpacity,
  View,
  ActivityIndicator,
  Text,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
  StyleProp,
} from 'react-native';

import styles from './styles';

export const ButtonDefault = ({
  onPress,
  text,
  disabled,
  renderIcon,
  submitting,
  style,
  textStyle,
}: TButtonDefault) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        { backgroundColor: !disabled ? '#413DFF' : '#A09EFF' },
      ]}
      onPress={onPress}
      disabled={disabled || submitting}
      activeOpacity={disabled || submitting ? 1 : 0.6}>
      {submitting ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <View style={styles.contentContainer}>
          {renderIcon && renderIcon()}
          <Text
            style={[
              styles.buttonText,
              (disabled || submitting) && styles.buttonTextDisabled,
              textStyle,
            ]}>
            {text}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

type TButtonDefault = {
  text: string;
  disabled?: boolean;
  submitting?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress: (event: GestureResponderEvent) => void;
  renderIcon?: () => ReactNode;
};
