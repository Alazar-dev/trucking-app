import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default function ProfileDetail() {
  return (
    <View>
      {personalData.map((total) => (
        <View
          key={total.id}
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: '3%',
            marginLeft: '5%',
          }}>
          <View style={{height: '55%', flex: 20}}>
            <Text style={{color: '#000', fontSize: 20}}>{total.title}</Text>
          </View>
          <View style={{height: '55%', flex: 5}}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>
      ))}
    </View>

    // #767577
  );
}

const personalData = [
  {
    id: 1,
    title: 'Bank Details',
    carType: 'Pickup',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    time: '12:40 PM',
    detail: 'View Order Details',
  },
  {
    id: 2,
    title: 'Invite to KEY',
    carType: 'Pickup',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    time: '12:40 PM',
    detail: 'View Order Details',
  },
  {
    id: 3,
    title: 'My Rating',
    carType: 'Pickup',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    time: '12:40 PM',
    detail: 'View Order Details',
  },
  {
    id: 4,
    title: 'Documents',
    carType: 'Pickup',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    time: '12:40 PM',
    detail: 'View Order Details',
  },
  {
    id: 5,
    title: 'Weakly Payout',
    carType: 'Pickup',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    time: '12:40 PM',
    detail: 'View Order Details',
  },
  {
    id: 6,
    title: 'About',
    carType: 'Pickup',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    time: '12:40 PM',
    detail: 'View Order Details',
  },
  {
    id: 7,
    title: 'Vehicle',
    carType: 'Pickup',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    time: '12:40 PM',
    detail: 'View Order Details',
  },
  {
    id: 8,
    title: 'Podcasts',
    carType: 'Pickup',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    time: '12:40 PM',
    detail: 'View Order Details',
  },
  {
    id: 9,
    title: 'Fuel Tax Collector',
    carType: 'Pickup',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    time: '12:40 PM',
    detail: 'View Order Details',
  },
  {
    id: 10,
    title: 'Settings',
    carType: 'Pickup',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    time: '12:40 PM',
    detail: 'View Order Details',
  },
  {
    id: 11,
    title: 'Log out',
    carType: 'Pickup',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    time: '12:40 PM',
    detail: 'View Order Details',
  },
];

const styles = StyleSheet.create({
  onlineStatus: {
    backgroundColor: '#c9cdd4',
  },
  buttonText: {
    padding: 10,
    color: '#000',
  },
});
