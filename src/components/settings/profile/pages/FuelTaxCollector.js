import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  CheckBox,
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default function InvoicesTwo(props) {
  const [isSuper, setIsSuper] = useState(false);
  const [isDiesel, setIsDiesel] = useState(false);
  const [isKerosene, setIsKerosene] = useState(false);
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
            <View style={[styles.checkboxContainer, {flex: 3}]}>
              <CheckBox
                value={isSuper}
                onValueChange={setIsSuper}
                style={styles.checkbox}
              />
            </View>
            <View style={{flex: 5, marginTop: 5}}>
              <Text style={styles.label}>Super</Text>
            </View>
            <View style={[styles.checkboxContainer, {flex: 3}]}>
              <CheckBox
                value={isDiesel}
                onValueChange={setIsDiesel}
                style={styles.checkbox}
              />
            </View>
            <View style={{flex: 5, marginTop: 5}}>
              <Text style={styles.label}>Diesel</Text>
            </View>
            <View style={[styles.checkboxContainer, {flex: 3}]}>
              <CheckBox
                value={isKerosene}
                onValueChange={setIsKerosene}
                style={styles.checkbox}
              />
            </View>
            <View style={{flex: 5, marginTop: 5}}>
              <Text style={styles.label}>Kerosene</Text>
            </View>
          </View>
          <Text>Send to</Text>
          <TextInput placeholder="Enter gross amount" />
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
