import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {Picker} from '@react-native-community/picker';

const HeaderEarnings = (props) => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'row',
        },
      ]}>
      <View style={{flex: 6}} />
      <View style={{flex: 9}}>
        <Text style={styles.topText}>Earnings</Text>
      </View>
      <View style={{flex: 5}}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Invoices')}>
          <Text style={{marginTop: 4}}>Send Invoice</Text>
        </TouchableOpacity>
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
export default HeaderEarnings;
