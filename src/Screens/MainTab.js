import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import EarningsScreen from './Earnings';
import TransactionScreen from './Orders';
import ProfileScreen from './Settings';
import Icon from 'react-native-vector-icons/FontAwesome';

const MainTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      style={{container: {backgroundColor: 'green'}}}
      tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: '#999999',
        // inactiveBackgroundColor: 'red',
        // activeBackgroundColor: 'transparent',
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
        name="Transaction"
        component={TransactionScreen}
        options={{
          tabBarLabel: 'Transaction',
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
