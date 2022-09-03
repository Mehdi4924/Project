import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../Screens/User/Dashboard';
import Login from '../Screens/Auth/Login';
import {useNavigation} from '@react-navigation/native';
import TabBarButton from './TabBarButton';
import ServiceDetails from '../Screens/User/ServiecDetails';
import BookService from '../Screens/User/BookService';
import AllServices from '../Screens/User/AllServices';
import Recommended from '../Screens/User/Recommended';
import Notifications from '../Screens/User/Notifications';
import Orders from '../Screens/User/Orders';
import OrderDetails from '../Screens/User/OrderDetails';
import TrackOrder from '../Screens/User/TrackOrder';
import PaymentMethod from '../Screens/User/PaymentMethod';
import CashOnDelivery from '../Screens/User/CashOnDelivery';
import Profile from '../Screens/User/Profile';
import ProfileDetails from '../Screens/User/ProfileDetails';
import AddAddress from '../Screens/User/AddAddress';
import Rewards from '../Screens/User/Rewards';
import MyWallet from '../Screens/User/MyWallet';

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
      <BottomTabsNestedScreens.Screen
        name="AllServices"
        component={AllServices}
      />
      <BottomTabsNestedScreens.Screen
        name="Recommended"
        component={Recommended}
      />
      <BottomTabsNestedScreens.Screen
        name="Notifications"
        component={Notifications}
      />
    </BottomTabsNestedScreens.Navigator>
  );
}

function BottomTabsOrders() {
  return (
    <BottomTabsOrdersNested.Navigator screenOptions={{headerShown: false}}>
      <BottomTabsOrdersNested.Screen name="Orders" component={Orders} />
      <BottomTabsOrdersNested.Screen
        name="OrderDetails"
        component={OrderDetails}
      />
      <BottomTabsNestedScreens.Screen
        name="BookService"
        component={BookService}
      />
      <BottomTabsOrdersNested.Screen name="TrackOrder" component={TrackOrder} />
      <BottomTabsOrdersNested.Screen
        name="PaymentMethod"
        component={PaymentMethod}
      />
      <BottomTabsOrdersNested.Screen
        name="CashOnDelivery"
        component={CashOnDelivery}
      />
      {/*  <BottomTabsOrdersNested.Screen
        name="Recommended"
        component={Recommended}
      />
      <BottomTabsOrdersNested.Screen
        name="Notifications"
        component={Notifications}
      />
      <BottomTabsOrdersNested.Screen
        name="OrderDetails"
        component={OrderDetails}
      /> */}
    </BottomTabsOrdersNested.Navigator>
  );
}
function BottomTabsProfile() {
  return (
    <BottomTabsProfileNested.Navigator screenOptions={{headerShown: false}}>
      <BottomTabsProfileNested.Screen name="Profile" component={Profile} />
      <BottomTabsProfileNested.Screen
        name="ProfileDetails"
        component={ProfileDetails}
      />
      <BottomTabsProfileNested.Screen
        name="AddAddress"
        component={AddAddress}
      />
      <BottomTabsProfileNested.Screen name="Rewards" component={Rewards} />
      <BottomTabsProfileNested.Screen name="MyWallet" component={MyWallet} />
    </BottomTabsProfileNested.Navigator>
  );
}
