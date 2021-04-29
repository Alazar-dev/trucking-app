import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

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
        <Ionicons name="md-checkmark-circle" size={24} color="black" />
      </View>
      <View style={{flex: 9}}>
        <Text style={styles.topText}>GMC Suburban</Text>
      </View>
      <View style={{flex: 2}}>
        <Ionicons name="md-checkmark-circle" size={24} color="black" />
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
