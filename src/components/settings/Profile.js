import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

export default function Profile() {
  return (
    <View style={{flex: 1, flexDirection: 'row', padding: 30}}>
      <View>
        <Avatar.Image size={90} source={require('../../assets/profile.jpeg')} />
      </View>
      <View style={{flex: 5, padding: 10}}>
        <View>
          <Text style={styles.name}>{profileDetail.name}</Text>
          <Text style={styles.job}>{profileDetail.job}</Text>
        </View>
        <Text style={styles.email}>{profileDetail.email}</Text>
        <Text style={styles.phone}>{profileDetail.phone}</Text>
      </View>
      <View>
        <Text>Edit</Text>
      </View>
    </View>
  );
}

const profileDetail = {
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