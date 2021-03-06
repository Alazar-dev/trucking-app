import React, {useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
// import {Avatar} from 'react-native-paper';
import VehicleType from './VehicleType';
import PhoneInput from 'react-native-phone-number-input';

export default function Invoices(props) {
  const phoneInput = useRef();
  const [value, setValue] = useState('');
  const [setFormattedValue] = useState('');
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
                {/*<Avatar.Image size={60} source={vehicle.img} />*/}
                <Text style={{color: '#c9cdd4'}}>{vehicle.mile}</Text>
                <Text>{vehicle.name}</Text>
              </View>
            );
          })}
        </View>
        <View style={{width: '50%'}}>
          <View style={{paddingHorizontal: 20}}>
            <Text>Vehicle Trailer Type</Text>
            <VehicleType />
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
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#51515151',
            }}>
            <PhoneInput
              ref={phoneInput}
              defaultValue={value}
              defaultCode="DM"
              layout="first"
              onChangeText={(text) => {
                setValue(text);
              }}
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }}
            />
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text>Email Address</Text>
          <TextInput
            placeholder="Enter email address"
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
    justifyContent: 'center',
    backgroundColor: '#20b2aa',
    borderColor: '#7DE24E',
    height: 43,
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
    img: require('../../../assets/download.jpeg'),
  },
  {
    id: 3,
    mile: '50$/mile',
    name: 'Reefer',
    img: require('../../../assets/download1.jpeg'),
  },
  {
    id: 4,
    mile: '50$/mile',
    name: 'Flat Bed',
    img: require('../../../assets/download2.jpeg'),
  },
];
