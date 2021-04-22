import React, {useState} from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';

const Flex = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabledTwo, setIsEnabledTwo] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitchTwo = () =>
    setIsEnabledTwo((previousState) => !previousState);

  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
      <View style={{flex: 6}}>
        <Text>Your Status</Text>
        <Text>Online/Offline</Text>
      </View>
      <View style={{flex: 2}}>
        <Switch
          style={{transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={'#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={{flex: 6}}>
        <Text>Accept +5 Miles?</Text>
        <Text>Yes/No</Text>
      </View>
      <View style={{flex: 2}}>
        <Switch
          style={{transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={'#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchTwo}
          value={isEnabledTwo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 450,
    paddingHorizontal: 20,
  },
});

export default Flex;
