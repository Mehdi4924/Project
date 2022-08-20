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
    <AuthStack.Navigator>
      <AuthStack.Screen name={'Splash'} component={Splash} />
      <AuthStack.Screen name={'OnBoarding'} component={OnBoarding} />
      <AuthStack.Screen
        name={'SelectRole'}
        component={SelectRole}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={'AuthSelect'}
        component={AuthSelect}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={'Login'}
        component={Login}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={'Signup'}
        component={Signup}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}
