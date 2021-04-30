import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default function Vehicles(props) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 2}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Settings')}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 5}}>
          <Text style={styles.header}>Invite a Friend</Text>
        </View>
      </View>
      <View>
        <Text style={styles.slug}>Your code is DF9382UI</Text>
      </View>
      {vehicles.map((vehicle) => {
        return (
          <View key={vehicle.id} style={{flexDirection: 'row', padding: 10}}>
            <View style={{flex: 3, paddingVertical: 20}}>
              <Text style={styles.notification}>{vehicle.name}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {fontSize: 20},
  slug: {
    textAlign: 'center',
    paddingVertical: 30,
    color: '#2baab2',
    fontSize: 20,
  },
  notification: {
    borderWidth: 2,
    borderRadius: 200,
    paddingVertical: 20,
    textAlign: 'center',
  },
});

const vehicles = [
  {
    id: 1,
    name: 'SMS',
    photo: require('../../../../assets/freightliner.jpeg'),
    type: '10ft Truck',
  },
  {
    id: 2,
    name: 'Twitter',
    photo: require('../../../../assets/van.jpeg'),
    type: '10ft Truck',
  },
  {
    id: 3,
    name: 'Facebook',
    photo: require('../../../../assets/van.jpeg'),
    type: '10ft Truck',
  },
];
