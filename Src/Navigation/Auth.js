import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/Auth/Login';
import AuthSelect from '../Screens/Auth/AuthSelect';
import Signup from '../Screens/Auth/Signup';
const AuthStack = createStackNavigator();

export default function Auth() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={'AuthSelect'} component={AuthSelect} />
      <AuthStack.Screen name={'Login'} component={Login} />
      <AuthStack.Screen name={'Signup'} component={Signup} />
    </AuthStack.Navigator>
  );
}
