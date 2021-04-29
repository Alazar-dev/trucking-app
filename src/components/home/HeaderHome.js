import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Feather, Fontisto} from '@expo/vector-icons';

const HeaderHome = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'row',
        },
      ]}>
      <View style={{flex: 6}}>
        <Feather name="message-circle" size={24} color="#20b2aa" />
      </View>
      <View style={{flex: 9}}>
        <Text style={styles.topText}>Freightliner</Text>
      </View>
      <View style={{flex: 2}}>
        <Fontisto name="bell-alt" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  topText: {
    fontSize: 20,
  },
});
export default HeaderHome;
