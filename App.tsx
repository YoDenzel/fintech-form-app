import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigator from 'navigation/RootNavigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.gestureRoot}>
        <Navigator />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  gestureRoot: {
    flex: 1,
  },
});
