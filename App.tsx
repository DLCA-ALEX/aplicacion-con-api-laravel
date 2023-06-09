import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import UserScreen from './screens/UserScreen';
import AdminScreen from './screens/AdminScreen';
import CoachScreen from './screens/CoachScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Coach" component={CoachScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;