import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';
import {AntDesign} from '@expo/vector-icons';

export default function Profile(props) {
  return (
    <>
      <View style={{flexDirection: 'row', margin: 20, marginBottom: 30}}>
        <View style={{flex: 2}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Settings')}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 3}}>
          <Text style={{fontSize: 20}}>Bank Detail</Text>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row', padding: 30}}>
        <View>
          <Avatar.Image
            size={90}
            source={require('../../../../assets/profile.jpeg')}
          />
        </View>
        <View style={{flex: 5, padding: 10}}>
          <View>
            <Text style={styles.name}>{profileData.name}</Text>
            <Text style={styles.job}>{profileData.job}</Text>
          </View>
          <Text style={styles.email}>{profileData.email}</Text>
          <Text style={styles.phone}>{profileData.phone}</Text>
        </View>
      </View>
    </>
  );
}

const profileData = {
  name: 'Alejandro Lopez',
  job: 'KEY Driver',
  email: 'alejandro@gmail.com',
  phone: '0987654321',
};

const styles = StyleSheet.create({
  onlineStatus: {
    backgroundColor: '#20b2aa',
  },
  buttonText: {
    padding: 10,
    color: '#fff',
  },
  name: {fontSize: 20, fontWeight: 'bold'},
  job: {fontSize: 20, color: '#a5acb8'},
  email: {fontSize: 16, color: '#000'},
  phone: {fontSize: 16, color: '#000'},
});
