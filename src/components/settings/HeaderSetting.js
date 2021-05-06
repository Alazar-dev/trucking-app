import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HeaderSettings = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={{flex: 6}} />
        <View style={{flex: 9}}>
          <Text style={styles.topText}>Settings</Text>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 9}}>
          <TouchableOpacity style={styles.onlineStatus}>
            <Text style={styles.buttonText}>ONLINE</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 3, height: '1%'}}>
          <TouchableOpacity style={styles.onlineStatus}>
            <Text style={{color: '#fff', height: 41, padding: 10}}>
              7 hours
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  topText: {
    fontSize: 20,
  },
  onlineStatus: {
    backgroundColor: '#20b2aa',
  },
  buttonText: {
    padding: 10,
    color: '#fff',
  },
});
export default HeaderSettings;
