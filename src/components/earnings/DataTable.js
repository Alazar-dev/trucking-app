import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';

export default function DataTable(props) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View>
      {history.map((total) => (
        <View
          style={{borderBottomWidth: 1, borderBottomColor: '#51515151'}}
          key={total.id}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('EarningsDetail')}
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
          </TouchableOpacity>
        </View>
      ))}
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}

const history = [
  {id: 1, date: 'Monday 12', trip: '2 trips', earn: '$200.00'},
  {id: 2, date: 'Sunday 10', trip: '1 trip', earn: '$150.00'},
  {id: 3, date: 'Saturday 15', trip: '3 trips', earn: '$156.00'},
  {id: 4, date: 'Monday 12', trip: '2 trips', earn: '$99.00'},
  {id: 5, date: 'Friday 12', trip: '5 trips', earn: '$300.00'},
  {id: 6, date: 'Thursday 12', trip: '4 trips', earn: '$234.00'},
  {id: 7, date: 'wednesday 9', trip: '1 trips', earn: '$200.00'},
  {id: 8, date: 'Saturday 15', trip: '1 trips', earn: '$299.00'},
  {id: 9, date: 'Monday 12', trip: '1 trips', earn: '$305.00'},
];
