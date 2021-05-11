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

export default function InvoicesFour(props) {
  return (
    <View>
      <ScrollView>
        <View style={{flexDirection: 'row', margin: 20, marginBottom: 30}}>
          <View style={{flex: 2}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('InvoicesThree')}>
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{flex: 4}}>
            <Text style={styles.header}>Send Invoices</Text>
          </View>
        </View>
        <View style={{padding: 20}}>
          <TextInput
            placeholder="Enter offer price"
            style={{
              borderWidth: 1.5,
              borderColor: '#c9cdd4',
              borderRadius: 2,
              height: '30%',
            }}
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('InvoicesThree')}
            style={styles.buttonStyle}
            activeOpacity={0.5}>
            <Text style={styles.buttonTextStyle}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
    color: '#FFFFFF',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    bottom: 0,
  },
  buttonTextStyle: {
    color: '#000000',
    paddingVertical: 10,
    fontSize: 18,
  },
});
