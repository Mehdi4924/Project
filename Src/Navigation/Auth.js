import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Screens/Auth/Splash';
import OnBoarding from '../Screens/Auth/OnBoarding';
import Login from '../Screens/Auth/Login';
import SelectRole from '../Screens/Auth/SelectRole';
import AuthSelect from '../Screens/Auth/AuthSelect';
import Signup from '../Screens/Auth/Signup';
const AuthStack = createStackNavigator();

export default function Auth() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={'Splash'} component={Splash} />
      <AuthStack.Screen name={'OnBoarding'} component={OnBoarding} />
      <AuthStack.Screen name={'SelectRole'} component={SelectRole} />
      <AuthStack.Screen name={'AuthSelect'} component={AuthSelect} />
      <AuthStack.Screen name={'Login'} component={Login} />
      <AuthStack.Screen name={'Signup'} component={Signup} />
    </AuthStack.Navigator>
  );
}
