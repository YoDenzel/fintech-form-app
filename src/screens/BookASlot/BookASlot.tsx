import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonDefault } from 'components/ButtonDefault/ButtonDefault';
import ScreenHeader from 'components/ScreenHeader/ScreenHeader';

import styles from './styles';
import { Checkbox } from 'components/Checkbox';

export const BookASlot = () => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View style={[styles.screen, { paddingTop: top }]}>
      <StatusBar />
      <LinearGradient
        colors={['rgba(246, 247, 250, 0.2)', 'rgba(66, 63, 255, 0.1)']}
        start={{ x: 0.1, y: 0.4 }}
        end={{ x: 1, y: 0.8 }}
        style={[styles.linearGradient, { paddingBottom: bottom + 20 }]}>
        <ScreenHeader onBack={() => undefined} />
        <View style={styles.pageTitleContainer}>
          <Text style={styles.pageTitle}>Забронировать слот</Text>
          <Text style={styles.pageTitleDescription}>
            Оставьте контактные данные, и мы с вами свяжемся в ближайший час.
          </Text>
        </View>
        <View>
          <ButtonDefault
            text="Отправить"
            onPress={() => undefined}
            style={styles.submitButton}
          />
          <View>
            <Checkbox />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
