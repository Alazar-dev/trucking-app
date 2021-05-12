import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import Calendar from '../../Calendar';

console.disableYellowBox = true;

export default function InvoicesTwo(props) {
  return (
    <View>
      <ScrollView>
        <View style={{flexDirection: 'row', margin: 20, marginBottom: 30}}>
          <View style={{flex: 2}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Invoices')}>
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{flex: 4}}>
            <Text style={styles.header}>Send Invoices</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text>Pick a date</Text>
          <Calendar />
        </View>
        <View style={{padding: 20}}>
          <Text>Send to</Text>
          <TextInput
            placeholder="Enter offer price"
            style={{
              borderWidth: 1.5,
              borderColor: '#c9cdd4',
              borderRadius: 15,
              height: '22%',
              padding: 10,
            }}
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Orders')}
            style={styles.buttonStyle}
            activeOpacity={0.5}>
            <Text style={styles.buttonTextStyle}>Send Invoice</Text>
          </TouchableOpacity>
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
  buttonStyle: {
    justifyContent: 'center',
    backgroundColor: '#20b2aa',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 45,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
    bottom: 0,
    left: 0,
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
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
