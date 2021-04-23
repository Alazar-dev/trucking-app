import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

const HeaderOrders = () => {
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
        <View>
          <Picker
            selectedValue={selectedValue}
            style={{height: 50, width: 300}}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="GMC Suburban" value="gmcsuburban" />
            <Picker.Item label="Toyota V8" value="toyotav8" />
          </Picker>
        </View>
      </View>
      <View style={{flex: 5}}>
        <Text>Send Invoice</Text>
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
export default HeaderOrders;
