import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  CheckBox,
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import Calendar from '../../Calendar';

console.disableYellowBox = true;

export default function InvoicesTwo(props) {
  const [isSelected, setIsSelected] = useState(false);
  const [isSelectedTwo, setIsSelectedTwo] = useState(false);
  const [date, setDate] = useState('09-10-2020');

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
        <View style={{paddingTop: 20, paddingHorizontal: 20}}>
          <View style={[styles.container, {flexDirection: 'row'}]}>
            <View style={[styles.checkboxContainer, {flex: 2}]}>
              <CheckBox
                value={isSelected}
                onValueChange={setIsSelected}
                style={styles.checkbox}
              />
            </View>
            <View style={{flex: 7, marginTop: 5}}>
              <Text style={styles.label}>Urgent</Text>
            </View>
            <View style={[styles.checkboxContainer, {flex: 2}]}>
              <CheckBox
                value={isSelectedTwo}
                onValueChange={setIsSelectedTwo}
                style={styles.checkbox}
              />
            </View>
            <View style={{flex: 6, marginTop: 5}}>
              <Text style={styles.label}>Schedule</Text>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text>Pick a date</Text>
          <Calendar />
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('InvoicesThree')}
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
