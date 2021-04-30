import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './main/Home';
import EarningsScreen from './main/Earnings';
import OrdersScreen from './main/Orders';
import SettingScreen from './main/Settings';
import {SimpleLineIcons, Feather} from '@expo/vector-icons';

const MainTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      style={{container: {backgroundColor: 'green'}}}
      tabBarOptions={{
        activeTintColor: '#2baab2',
        inactiveTintColor: '#999999',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="location-pin" size={24} color="#2baab2" />
          ),
        }}
      />
      <Tab.Screen
        name="Earnings"
        component={EarningsScreen}
        options={{
          tabBarLabel: 'Earnings',
          tabBarIcon: ({color, size}) => (
            <Feather name="pie-chart" size={24} color="#2baab2" />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color, size}) => (
            <Feather name="layers" size={24} color="#2baab2" />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color, size}) => (
            <Feather name="settings" size={24} color="#2baab2" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
