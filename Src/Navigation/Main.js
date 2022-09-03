import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Auth from './Auth';
import UserStack from './UserStack';
import VendorStack from './VendorStack';
import VendorAuth from './VendorAuth';
const Stack = createStackNavigator();

export default function Main() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="VendorAuth" component={VendorAuth} />
      <Stack.Screen name="UserStack" component={UserStack} />
      <Stack.Screen name="VendorStack" component={VendorStack} />
    </Stack.Navigator>
  );
}
