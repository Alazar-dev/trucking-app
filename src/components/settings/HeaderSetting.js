import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HeaderSettings = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 6}} />
      <View style={{flex: 9}}>
        <Text style={styles.topText}>Setting</Text>
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
});
export default HeaderSettings;
