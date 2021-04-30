import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Avatar} from 'react-native-paper';

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
          <Text style={styles.header}>Your Vehicles</Text>
        </View>
      </View>
      <Text style={styles.slug}>Select vehicle to start driving</Text>
      {vehicles.map((vehicle) => {
        return (
          <View key={vehicle.id} style={{flexDirection: 'row', padding: 10}}>
            <View style={{flex: 2}}>
              <Avatar.Image size={90} source={vehicle.photo} />
            </View>
            <View style={{flex: 3, paddingVertical: 20}}>
              <Text style={{fontSize: 20}}>{vehicle.name}</Text>
              <Text>{vehicle.type}</Text>
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
  slug: {textAlign: 'center', paddingVertical: 30},
});

const vehicles = [
  {
    id: 1,
    name: 'GMC Suburban',
    photo: require('../../../../../assets/freightliner.jpeg'),
    type: '10ft Truck',
  },
  {
    id: 2,
    name: 'Toyota',
    photo: require('../../../../../assets/van.jpeg'),
    type: '10ft Truck',
  },
];
