import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Container} from 'components';

import HeaderSetting from '../../components/settings/HeaderSetting';

const Setting = () => {
  return (
    <Container>
      <ScrollView>
        <HeaderSetting />
        <TouchableOpacity style={styles.onlineStatus}>
          <Text style={styles.buttonText}>ONLINE</Text>
        </TouchableOpacity>
        <View>
          <Avatar rounded title="MD" />
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  onlineStatus: {
    backgroundColor: '#20b2aa',
  },
  buttonText: {
    padding: 10,
    color: '#fff',
  },
});

export default Setting;
