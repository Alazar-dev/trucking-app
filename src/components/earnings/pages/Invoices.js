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
              borderRadius: 15,
              height: 45,
              padding: 10,
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
              borderRadius: 15,
              height: 45,
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
                borderRadius: 15,
                height: 45,
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
                borderRadius: 15,
                height: 45,
                padding: 10,
              }}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', padding: 20}}>
          {vehicles.map((vehicle) => {
            return (
              <View key={vehicle.id} style={{flex: 2}}>
                <Avatar.Image size={60} source={vehicle.img} />
                <Text style={{color: '#c9cdd4'}}>{vehicle.mile}</Text>
                <Text>{vehicle.name}</Text>
              </View>
            );
          })}
        </View>
        <View style={{width: '50%'}}>
          <View style={{paddingHorizontal: 20}}>
            <Text>Vehicle Type</Text>
            <TextInput
              placeholder=""
              style={{
                borderWidth: 1.5,
                borderColor: '#c9cdd4',
                borderRadius: 15,
                height: 40,
                padding: 10,
              }}
            />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 50,
            paddingVertical: 50,
          }}>
          <View style={{borderBottomWidth: 3, borderColor: '#c9cdd4'}} />
        </View>
        <View style={{paddingTop: 20, paddingHorizontal: 20}}>
          <Text>Receiver Company name</Text>
          <TextInput
            placeholder="Enter receiver name"
            style={{
              borderWidth: 1.5,
              borderColor: '#c9cdd4',
              borderRadius: 15,
              height: 60,
              padding: 10,
            }}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text>Phone number</Text>
          <TextInput
            placeholder="Enter Phone number"
            style={{
              borderWidth: 1.5,
              borderColor: '#c9cdd4',
              borderRadius: 15,
              height: 60,
              padding: 10,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('InvoicesTwo')}
          style={styles.buttonStyle}
          activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>NEXT</Text>
        </TouchableOpacity>
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
  buttonStyle: {
    backgroundColor: '#20b2aa',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTwoStyle: {
    borderWidth: 0,
    color: '#FFFFFF',
    alignItems: 'center',
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 30,
  },
  buttonTextStyle: {
    color: '#000000',
    paddingVertical: 10,
    fontSize: 18,
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
