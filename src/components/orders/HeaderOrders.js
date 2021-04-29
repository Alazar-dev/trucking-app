import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HeaderOrders = () => {
  return (
    <View>
      <Text style={styles.topText}>History</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topText: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});
export default HeaderOrders;
