import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Avatar} from 'react-native-paper';

export default function Invoices(props) {
  return (
    <View>
      <ScrollView>
        <View style={{flexDirection: 'row', margin: 20, marginBottom: 30}}>
          <View style={{flex: 2}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Earnings')}>
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{flex: 4}}>
            <Text style={styles.header}>Send Invoices</Text>
          </View>
        </View>
        <View style={{paddingTop: 20, paddingHorizontal: 20}}>
          <Text>Pick up address</Text>
          <TextInput
            placeholder="Pick up address"
            style={{
              borderWidth: 1.5,
              borderColor: '#c9cdd4',
              borderRadius: 2,
              height: 60,
            }}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text>Drop off address</Text>
          <TextInput
            placeholder="Drop off address"
            style={{
              borderWidth: 1.5,
              borderColor: '#c9cdd4',
              borderRadius: 2,
              height: 60,
              padding: 10,
            }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 50,
            paddingVertical: 50,
          }}>
          <View style={{borderBottomWidth: 3, borderColor: '#c9cdd4'}} />
        </View>
        <View style={{width: '50%'}}>
          <View style={{paddingTop: 20, paddingHorizontal: 20}}>
            <Text>Load Weight</Text>
            <TextInput
              placeholder="View All"
              style={{
                borderWidth: 1.5,
                borderColor: '#c9cdd4',
                borderRadius: 2,
                height: 60,
                padding: 10,
              }}
            />
          </View>
          <View style={{paddingHorizontal: 20}}>
            <Text>Load Type</Text>
            <TextInput
              placeholder="Breakable"
              style={{
                borderWidth: 1.5,
                borderColor: '#c9cdd4',
                borderRadius: 2,
                height: 60,
              }}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', padding: 20}}>
          {vehicles.map((vehicle) => {
            return (
              <View style={{flex: 2}}>
                <Avatar.Image size={60} source={vehicle.img} />
                <Text style={{color: '#c9cdd4'}}>{vehicle.mile}</Text>
                <Text>{vehicle.name}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {fontSize: 20},
  onlineStatus: {
    backgroundColor: '#c9cdd4',
  },
  buttonText: {
    padding: 10,
    color: '#000',
  },
});

const vehicles = [
  {
    id: 1,
    mile: '50$/mile',
    name: 'Hot Shot',
    img: require('../../../assets/van.jpeg'),
  },
  {
    id: 2,
    mile: '50$/mile',
    name: 'Dry Van',
    img: require('../../../assets/van.jpeg'),
  },
  {
    id: 3,
    mile: '50$/mile',
    name: 'Reefer',
    img: require('../../../assets/van.jpeg'),
  },
  {
    id: 4,
    mile: '50$/mile',
    name: 'Flat Bed',
    img: require('../../../assets/van.jpeg'),
  },
];
