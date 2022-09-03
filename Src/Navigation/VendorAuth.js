import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Screens/VendorAuth/Splash';
import OnBoarding from '../Screens/VendorAuth/OnBoarding';
import Login from '../Screens/VendorAuth/Login';
import SelectRole from '../Screens/VendorAuth/SelectRole';
import AuthSelect from '../Screens/VendorAuth/AuthSelect';
import Signup from '../Screens/VendorAuth/Signup';
const VendorAuthStack = createStackNavigator();

export default function VendorAuth() {
  return (
    <VendorAuthStack.Navigator screenOptions={{headerShown: false}}>
      <VendorAuthStack.Screen name={'Splash'} component={Splash} />
      <VendorAuthStack.Screen name={'OnBoarding'} component={OnBoarding} />
      <VendorAuthStack.Screen name={'SelectRole'} component={SelectRole} />
      <VendorAuthStack.Screen name={'AuthSelect'} component={AuthSelect} />
      <VendorAuthStack.Screen name={'Login'} component={Login} />
      <VendorAuthStack.Screen name={'Signup'} component={Signup} />
    </VendorAuthStack.Navigator>
  );
}
