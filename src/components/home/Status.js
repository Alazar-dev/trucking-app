import React, {useState} from 'react';
import {StyleSheet, Text, View, Switch, TouchableOpacity} from 'react-native';

const Status = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabledTwo, setIsEnabledTwo] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitchTwo = () =>
    setIsEnabledTwo((previousState) => !previousState);
  return (
    <View style={styles.container}>
      {isEnabledTwo ? (
        <SeeAllRequests navigation={props.navigation} />
      ) : (
        <View style={{height: 22}} />
      )}
      <View style={{flexDirection: 'row', paddingHorizontal: '5%'}}>
        <View style={{flex: 6}}>
          <Text style={{color: '#2baab2'}}>Your Status</Text>
          <Text>Online/Offline</Text>
        </View>
        <View style={{flex: 2}}>
          <Switch
            style={{transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
            trackColor={{false: '#767577', true: '#2baab2'}}
            thumbColor={'#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{flex: 6}}>
          <Text style={{color: '#2baab2'}}>Accept +5 Miles?</Text>
          <Text>Yes/No</Text>
        </View>
        <View style={{flex: 2}}>
          <Switch
            style={{transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
            trackColor={{false: '#767577', true: '#2baab2'}}
            thumbColor={'#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchTwo}
            value={isEnabledTwo}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: '-11%',
  },
});

export default Status;

const SeeAllRequests = (props) => {
  return (
    <TouchableOpacity
      style={{backgroundColor: '#2baab2'}}
      onPress={() => props.navigation.navigate('PickupRequests')}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          // padding: 5,
          color: '#fff',
        }}>
        See all requests
      </Text>
    </TouchableOpacity>
  );
};
