import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {Avatar} from 'react-native-paper';

export default function Profile(props) {
  return (
    <View style={{flex: 1, flexDirection: 'row', padding: 30}}>
      <View>
        {/*<Avatar.Image*/}
        {/*  size={90}*/}
        {/*  source={require('../../../assets/profile.jpeg')}*/}
        {/*/>*/}
      </View>
      <View style={{flex: 5, padding: 10}}>
        <View>
          <Text style={styles.name}>{profileData.name}</Text>
          <Text style={styles.job}>{profileData.job}</Text>
        </View>
        <Text style={styles.email}>{profileData.email}</Text>
        <Text style={styles.phone}>{profileData.phone}</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ChangePassword')}
          style={{marginTop: 5}}>
          <Text style={{color: '#2baab2', marginTop: 5}}>Change Password</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 5}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ProfileEdit')}>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
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
