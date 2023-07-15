import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

export const BookASlot = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.screen, { paddingTop: top }]}>
      <LinearGradient
        colors={['rgba(246, 247, 250, 0.2)', 'rgba(66, 63, 255, 0.1)']}
        start={{ x: 0.1, y: 0.3 }}
        end={{ x: 1, y: 0.3 }}
        style={styles.linearGradient}>
        <Text>Book a slots</Text>
      </LinearGradient>
    </View>
  );
};
