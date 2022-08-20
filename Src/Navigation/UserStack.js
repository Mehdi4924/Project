import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../Screens/User/Dashboard';
import Login from '../Screens/Auth/Login';
const BottomTabs = createBottomTabNavigator();
const UserNavigator = createStackNavigator();
const BottomTabsNestedScreens = createStackNavigator();

export default function UserStack() {
  return (
    <UserNavigator.Navigator screenOptions={{headerShown: false}}>
      <UserNavigator.Screen
        name={'UserNavigatorScreens'}
        component={UserNavigatorScreens}
      />
    </UserNavigator.Navigator>
  );
}

function UserNavigatorScreens() {
  return (
    <BottomTabs.Navigator screenOptions={{headerShown: false}}>
      <BottomTabs.Screen name="BottomTabsNested" component={BottomTabsNested} />
      <BottomTabs.Screen name="Login" component={Login} />
      <BottomTabs.Screen name="BottomTabsNestedw" component={BottomTabsNested} />
      {/* <BottomTabs.Screen name="Orders" component={Orders} />
      <BottomTabs.Screen name="Profile" component={Profile} /> */}
    </BottomTabs.Navigator>
  );
}

function BottomTabsNested() {
  return (
    <BottomTabsNestedScreens.Navigator screenOptions={{headerShown: false}}>
      <BottomTabsNestedScreens.Screen name="DashBoard" component={Dashboard} />
    </BottomTabsNestedScreens.Navigator>
  );
}
