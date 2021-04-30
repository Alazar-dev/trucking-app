import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default function ProfileDetail(props) {
  return (
    <View>
      {personalData.map((total) => (
        <View
          key={total.id}
          style={{
            flex: 1,
            padding: '3%',
            marginLeft: '5%',
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate(total.page)}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{height: '55%', flex: 20}}>
                <Text style={{color: '#000', fontSize: 20}}>{total.title}</Text>
              </View>
              <View style={{height: '55%', flex: 5}}>
                <AntDesign name="right" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const personalData = [
  {
    id: 1,
    title: 'Bank Details',
  },
  {
    id: 2,
    title: 'Invite to KEY',
  },
  {
    id: 3,
    title: 'My Rating',
  },
  {
    id: 4,
    title: 'Documents',
  },
  {
    id: 5,
    title: 'Weakly Payout',
  },
  {
    id: 6,
    title: 'About',
  },
  {
    id: 7,
    title: 'Vehicle',
    page: 'Vehicles',
  },
  {
    id: 8,
    title: 'Podcasts',
  },
  {
    id: 9,
    title: 'Fuel Tax Collector',
  },
  {
    id: 10,
    title: 'Settings',
  },
  {
    id: 11,
    title: 'Log out',
  },
];
