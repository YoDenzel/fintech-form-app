import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BookASlot } from 'screens/BookASlot';
import { Submitted } from 'screens/Submitted/Submitted';

import { RootStackParamList } from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="BookASlot" component={BookASlot} />
        <RootStack.Screen name="Submitted" component={Submitted} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
