import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './main/Home';
import EarningsScreen from './main/Earnings';
import OrdersScreen from './main/Orders';
import ProfileScreen from './main/Settings';
import Icon from 'react-native-vector-icons/FontAwesome';

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
            <Icon name="map-marker" color={color} size={size * 0.9} />
          ),
        }}
      />
      <Tab.Screen
        name="Earnings"
        component={EarningsScreen}
        options={{
          tabBarLabel: 'Earnings',
          tabBarIcon: ({color, size}) => (
            <Icon name="money" color={color} size={size * 0.9} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color, size}) => (
            <Icon name="clipboard" color={color} size={size * 0.9} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="cog" color={color} size={size * 0.9} />
          ),
          tabBarBadge: '10',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
