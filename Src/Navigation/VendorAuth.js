import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/VendorAuth/Login';
import AuthSelect from '../Screens/VendorAuth/AuthSelect';
import Signup from '../Screens/VendorAuth/Signup';
const VendorAuthStack = createStackNavigator();

export default function VendorAuth() {
  return (
    <VendorAuthStack.Navigator screenOptions={{headerShown: false}}>
      <VendorAuthStack.Screen name={'AuthSelect'} component={AuthSelect} />
      <VendorAuthStack.Screen name={'Login'} component={Login} />
      <VendorAuthStack.Screen name={'Signup'} component={Signup} />
    </VendorAuthStack.Navigator>
  );
}
