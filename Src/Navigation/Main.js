import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Auth from './Auth';
const Stack = createStackNavigator();

export default function Main() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
}
