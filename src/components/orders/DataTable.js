import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default function DataTable() {
  return (
    <View>
      {history.map((total) => (
        <View
          key={total.id}
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: '3%',
            marginLeft: '5%',
          }}>
          <View style={{height: '55%', flex: 20}}>
            <Text style={{color: '#2baab2'}}>{total.company}</Text>
            <Text>{total.location}</Text>
            <Text>{total.detail}</Text>
          </View>
          <View style={{height: '55%', flex: 5}}>
            <Text>{total.carType}</Text>
            <Text style={{fontWeight: 'bold'}}>{total.time}</Text>
          </View>
        </View>
      ))}
      <TouchableOpacity style={styles.onlineStatus}>
        <Text style={styles.buttonText}>Tomorrow</Text>
      </TouchableOpacity>
      {history.map((total) => (
        <View
          key={total.id}
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: '3%',
            marginLeft: '5%',
          }}>
          <View style={{height: '55%', flex: 20}}>
            <Text style={{color: '#2baab2'}}>{total.company}</Text>
            <Text>{total.location}</Text>
            <Text style={{color: '#767579'}}>{total.detail}</Text>
          </View>
          <View style={{height: '55%', flex: 5}}>
            <Text>{total.carType}</Text>
            <Text style={{fontWeight: 'bold'}}>{total.time}</Text>
          </View>
        </View>
      ))}
    </View>

    // #767577
  );
}

const history = [
  {
    id: 1,
    company: 'ABC trading - Order # 40',
    carType: 'Pickup',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    time: '12:40 PM',
    detail: 'View Order Details',
  },
  {
    id: 2,
    company: 'XYZ Incorporated - Order # 41',
    carType: 'Pickup',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    time: '12:40 PM',
    detail: 'View Order Details',
  },
  {
    id: 3,
    company: 'Byy company - Order # 42',
    carType: 'Pickup',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    time: '12:40 PM',
    detail: 'View Order Details',
  },
  {
    id: 4,
    company: 'DDY trading - Order # 43',
    carType: 'Pickup',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    time: '12:40 PM',
    detail: 'View Order Details',
  },
];

const styles = StyleSheet.create({
  onlineStatus: {
    backgroundColor: '#c9cdd4',
  },
  buttonText: {
    padding: 10,
    color: '#000',
  },
});
