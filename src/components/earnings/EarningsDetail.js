import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Avatar} from 'react-native-paper';

import Map from '../Map';

export default function EarningsDetail(props) {
  return (
    <View>
      <View style={{flexDirection: 'row', margin: 20, marginBottom: 30}}>
        <View style={{flex: 2}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Settings')}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 4}}>
          <Text style={{fontSize: 24}}>Trip Summary</Text>
          <Text style={{fontSize: 18}}>Apr 3rd, 9:45 AM</Text>
        </View>
      </View>
      <View style={{height: '50%'}}>
        <Map />
      </View>
      <View style={{flexDirection: 'row', margin: 20}}>
        <View style={{flex: 2}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Settings')}>
            <Avatar.Image size={80} source={require('../../assets/xyz.jpeg')} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 4, justifyContent: 'center'}}>
          <Text style={{fontSize: 24}}>XYZ Company</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {fontSize: 20},
  onlineStatus: {
    backgroundColor: '#c9cdd4',
  },
});
