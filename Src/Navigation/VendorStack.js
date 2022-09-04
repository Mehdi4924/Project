import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import TabBarButton from './TabBarButton';
import Orders from '../Screens/Vendor/Orders';
import Profile from '../Screens/Vendor/Profile';
import VendorDashboard from '../Screens/Vendor/VendorDashboard';
import Wallet2 from '../Screens/User/Wallet2';

const BottomTabs = createBottomTabNavigator();
const Vendor = createStackNavigator();
const BottomTabsNestedScreens = createStackNavigator();
const BottomTabsOrdersNested = createStackNavigator();
const BottomTabsProfileNested = createStackNavigator();

export default function VendorStack() {
  return (
    <Vendor.Navigator screenOptions={{headerShown: false}}>
      <Vendor.Screen name={'VendorScreens'} component={VendorScreens} />
    </Vendor.Navigator>
  );
}

function VendorScreens() {
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
              imgSrc={require('../Assets/home.png')}
              {...props}
              name="Home"
              onPress={() => navigation.navigate('BottomTabsNested')}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="BottomTabsOrders"
        component={BottomTabsOrders}
        options={{
          tabBarButton: props => (
            <TabBarButton
              imgSrc={require('../Assets/orders.png')}
              {...props}
              name="Orders"
              onPress={() => navigation.navigate('BottomTabsOrders')}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="BottomTabsProfile"
        component={BottomTabsProfile}
        options={{
          tabBarButton: props => (
            <TabBarButton
              imgSrc={require('../Assets/profile.png')}
              {...props}
              name="Profile"
              onPress={() => navigation.navigate('BottomTabsProfile')}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

function BottomTabsNested() {
  return (
    <BottomTabsNestedScreens.Navigator screenOptions={{headerShown: false}}>
      <BottomTabsNestedScreens.Screen
        name="VendorDashBoard"
        component={VendorDashboard}
      />
      <BottomTabsNestedScreens.Screen
        name="Wallet2"
        component={Wallet2}
      />
    </BottomTabsNestedScreens.Navigator>
  );
}

function BottomTabsOrders() {
  return (
    <BottomTabsOrdersNested.Navigator screenOptions={{headerShown: false}}>
      <BottomTabsOrdersNested.Screen name="Orders" component={Orders} />
    </BottomTabsOrdersNested.Navigator>
  );
}
function BottomTabsProfile() {
  return (
    <BottomTabsProfileNested.Navigator screenOptions={{headerShown: false}}>
      <BottomTabsProfileNested.Screen name="Profile" component={Profile} />
    </BottomTabsProfileNested.Navigator>
  );
}
