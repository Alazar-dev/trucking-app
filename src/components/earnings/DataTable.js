import React from 'react';
import {View, Text} from 'react-native';

export default function DataTable() {
  return (
    <View>
      {history.map((total) => (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: '3%',
            marginLeft: '5%',
          }}>
          <View style={{height: '55%', flex: 6}}>
            <Text>{total.date}</Text>
            <Text>{total.trip}</Text>
          </View>
          <View style={{flex: 10}} />
          <View style={{height: '55%', flex: 6}}>
            <Text style={{fontWeight: 'bold'}}>{total.earn}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const history = [
  {id: 1, date: 'Monday 12', trip: '2 trips', earn: '$234.00'},
  {id: 2, date: 'Monday 12', trip: '2 trips', earn: '$234.00'},
  {id: 3, date: 'Monday 12', trip: '2 trips', earn: '$234.00'},
  {id: 4, date: 'Monday 12', trip: '2 trips', earn: '$234.00'},
  {id: 5, date: 'Monday 12', trip: '2 trips', earn: '$234.00'},
  {id: 6, date: 'Monday 12', trip: '2 trips', earn: '$234.00'},
  {id: 7, date: 'Monday 12', trip: '2 trips', earn: '$234.00'},
  {id: 8, date: 'Monday 12', trip: '2 trips', earn: '$234.00'},
  {id: 9, date: 'Monday 12', trip: '2 trips', earn: '$234.00'},
];
