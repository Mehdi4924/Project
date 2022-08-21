import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../Screens/User/Dashboard';
import Login from '../Screens/Auth/Login';
const BottomTabs = createBottomTabNavigator();
const UserNavigator = createStackNavigator();
const BottomTabsNestedScreens = createStackNavigator();
import {useNavigation} from '@react-navigation/native';
import TabBarButton from './TabBarButton';
import ServiceDetails from '../Screens/User/ServiecDetails';
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
  const navigation = useNavigation();
  return (
    <BottomTabs.Navigator
      screenOptions={{headerShown: false, tabBarLabelPosition: 'beside-icon'}}>
      <BottomTabs.Screen
        name="BottomTabsNested"
        component={BottomTabsNested}
        options={{
          tabBarButton: props => (
            <TabBarButton
              imgSrc={require('../Assets/user.png')}
              {...props}
              name="Home"
              onPress={() => navigation.navigate('BottomTabsNested')}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Login"
        component={Login}
        options={{
          tabBarButton: props => (
            <TabBarButton
              imgSrc={require('../Assets/user.png')}
              {...props}
              name="Home"
              onPress={() => navigation.navigate('Login')}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="BottomTabsNestedw"
        component={BottomTabsNested}
        options={{
          tabBarButton: props => (
            <TabBarButton
              imgSrc={require('../Assets/user.png')}
              {...props}
              name="Home"
              onPress={() => navigation.navigate('BottomTabsNested')}
            />
          ),
        }}
      />
      {/* <BottomTabs.Screen name="Orders" component={Orders} />
      <BottomTabs.Screen name="Profile" component={Profile} /> */}
    </BottomTabs.Navigator>
  );
}

function BottomTabsNested() {
  return (
    <BottomTabsNestedScreens.Navigator screenOptions={{headerShown: false}}>
      <BottomTabsNestedScreens.Screen name="DashBoard" component={Dashboard} />
      <BottomTabsNestedScreens.Screen
        name="ServiceDetails"
        component={ServiceDetails}
      />
    </BottomTabsNestedScreens.Navigator>
  );
}
