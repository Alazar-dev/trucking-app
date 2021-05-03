import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import {Picker} from '@react-native-community/picker';

const HeaderEarnings = (props) => {
  const [selectedValue, setSelectedValue] = useState('java');
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
          <Text>Send Invoice</Text>
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
