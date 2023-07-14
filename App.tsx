import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const red = {
    backgroundColor: 'red',
  };
  return (
    <View style={{ height: 100 }}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar
        style="auto"
        backgroundColor="green"
        networkActivityIndicatorVisible
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
