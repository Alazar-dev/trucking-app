import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, StyleSheet, Picker} from 'react-native';
import {Badge} from 'react-native-elements';

const HeaderHome = () => {
  const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'row',
        },
      ]}>
      <View style={{flex: 6}}>
        <Icon name="comment" size={40} color="#20b2aa" />
        <Badge
          value="3"
          status="error"
          containerStyle={{position: 'absolute', top: 10, right: 75}}
        />
      </View>
      <View style={{flex: 9}}>
        <Text>GMC Suburban</Text>
        <View>
          <Picker
            selectedValue={selectedValue}
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="GMC Suburban" value="gmcsuburban" />
            <Picker.Item label="Toyota V8" value="toyotav8" />
          </Picker>
        </View>
      </View>
      <View style={{flex: 2}}>
        <Icon name="bell" size={40} color="#000000" />
        <Badge
          value="3"
          status="error"
          containerStyle={{position: 'absolute', top: 10, right: 0}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default HeaderHome;
