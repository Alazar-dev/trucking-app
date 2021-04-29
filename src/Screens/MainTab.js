import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './main/Home';
import EarningsScreen from './main/Earnings';
import OrdersScreen from './main/Orders';
import SettingScreen from './main/Settings';
import {AntDesign} from '@expo/vector-icons';

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
            <AntDesign name="stepforward" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Earnings"
        component={EarningsScreen}
        options={{
          tabBarLabel: 'Earnings',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="stepforward" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="stepforward" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="stepforward" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
