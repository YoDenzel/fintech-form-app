import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from 'navigation/types';
import { Icons } from 'assets/icons';
import ScreenHeader from 'components/ScreenHeader/ScreenHeader';
import { ButtonDefault } from 'components/ButtonDefault';

import styles from './styles';

export function Submitted({}: NativeStackScreenProps<
  RootStackParamList,
  'Submitted'
>) {
  const { bottom, top } = useSafeAreaInsets();
  return (
    <View style={[styles.screen, { paddingTop: top }]}>
      <LinearGradient
        colors={['rgba(246, 247, 250, 0.2)', 'rgba(66, 63, 255, 0.1)']}
        start={{ x: 0.1, y: 0.4 }}
        end={{ x: 1, y: 0.8 }}
        style={[styles.linearGradient, { paddingBottom: bottom + 20 }]}>
        <ScreenHeader />
        <View style={styles.contentContainer}>
          <View style={styles.checkMarkContainer}>
            <Icons.CheckMark width={36} height={22} />
          </View>
          <Text style={styles.title}>Готово!</Text>
          <Text style={styles.description}>
            Заявка отправлена. Мы с вами свяжемся в ближайший час.
          </Text>
        </View>
        <ButtonDefault text="Ок" onPress={() => undefined} />
      </LinearGradient>
    </View>
  );
}
