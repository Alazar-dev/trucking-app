import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';

export default function DataTable() {
  const [selectedLanguage, setSelectedLanguage] = useState();
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
          <View style={{height: '55%', flex: 7}}>
            <Text>{total.date}</Text>
            <Text>{total.trip}</Text>
          </View>
          <View style={{flex: 15}} />
          <View style={{height: '55%', flex: 6}}>
            <Text style={{fontWeight: 'bold'}}>{total.earn}</Text>
          </View>
          <View style={{flex: 2}}>
            <AntDesign name="right" size={21} color="black" />
          </View>
        </View>
      ))}
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
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
