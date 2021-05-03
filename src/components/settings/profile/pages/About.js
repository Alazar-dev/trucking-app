import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {AntDesign} from '@expo/vector-icons';

const About = (props) => {
  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          alignContent: 'center',
        }}>
        <View style={{flexDirection: 'row', margin: 20, marginBottom: 30}}>
          <View style={{flex: 2}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Settings')}>
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{flex: 3}}>
            <Text style={[styles.header, {fontSize: 20}]}>About</Text>
          </View>
        </View>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../../../assets/Logo.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
              <Text style={styles.mainText}>Trucking app</Text>
              <Text style={(styles.mainText, {fontSize: 23, color: '#2baab2'})}>
                Version 2.1.03
              </Text>
              <Text>Last Updated: January 23rd, 2019</Text>
            </View>
          </KeyboardAvoidingView>
        </View>
        <View style={{margin: 20, paddingTop: 50}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Settings')}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 30}}>
                <Text style={{color: '#000', fontSize: 20}}>
                  Driver's License
                </Text>
                <Text style={{color: '#595959', fontSize: 15}}>
                  Expiration 26/01/2019
                </Text>
              </View>
              <View style={{height: '55%', flex: 3}}>
                <AntDesign name="right" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{margin: 20, paddingTop: 20}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Settings')}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 30}}>
                <Text style={{color: '#000', fontSize: 20}}>
                  Driver's License
                </Text>
                <Text style={{color: '#595959', fontSize: 15}}>
                  Expiration 26/01/2019
                </Text>
              </View>
              <View style={{height: '55%', flex: 3}}>
                <AntDesign name="right" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  mainText: {
    color: '#000',
    fontSize: 30,
  },
});

export default About;
