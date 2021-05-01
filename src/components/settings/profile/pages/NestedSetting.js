import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
} from 'react-native';
import {AntDesign, FontAwesome} from '@expo/vector-icons';

export default function NestedSetting(props) {
  const [googleEnabled, setGoogleEnable] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const toggleSwitchGoogle = () =>
    setGoogleEnable((previousState) => !previousState);
  const toggleSWitchNotificaions = () =>
    setNotificationsEnabled((previousState) => !previousState);

  return (
    <ScrollView>
      <View style={{flexDirection: 'row', margin: 20, marginBottom: 30}}>
        <View style={{flex: 2}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Settings')}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 4}}>
          <Text style={styles.header}>Settings</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 30}}>
            <Text style={{color: '#000', fontSize: 20}}>Google Voice</Text>
          </View>
          <View style={{height: '55%', flex: 3}}>
            <Switch
              style={{transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
              trackColor={{false: '#767577', true: '#2baab2'}}
              thumbColor={'#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchGoogle}
              value={googleEnabled}
            />
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 30}}>
            <Text style={{color: '#000', fontSize: 20}}>Notifications</Text>
          </View>
          <View style={{height: '55%', flex: 3}}>
            <Switch
              style={{transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
              trackColor={{false: '#767577', true: '#2baab2'}}
              thumbColor={'#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSWitchNotificaions}
              value={notificationsEnabled}
            />
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 30}}>
              <Text style={{color: '#000', fontSize: 20}}>Navigation</Text>
            </View>
            <View style={{height: '55%', flex: 3}}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 30}}>
              <Text style={{color: '#000', fontSize: 20}}>About KEY</Text>
            </View>
            <View style={{height: '55%', flex: 3}}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 30}}>
              <Text style={{color: '#000', fontSize: 20}}>Tripsheet</Text>
            </View>
            <View style={{height: '55%', flex: 3}}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {fontSize: 20},
  onlineStatus: {
    backgroundColor: '#c9cdd4',
  },
  buttonText: {
    padding: 10,
    color: '#000',
  },
});
