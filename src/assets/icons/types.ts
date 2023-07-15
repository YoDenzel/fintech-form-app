import { StyleProp, ViewStyle } from 'react-native';

export type TIcon = Partial<{
  width: number;
  height: number;
  color: string;
  style: StyleProp<ViewStyle>;
}>;
