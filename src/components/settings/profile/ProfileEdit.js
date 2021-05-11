import React, {createRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

const ProfileEdit = (props) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const passwordInputRef = createRef();

  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  padding: 25,
                  paddingHorizontal: 25,
                }}>
                <View style={{flex: 4}}>
                  <TouchableOpacity style={styles.onlineStatus}>
                    <AntDesign name="left" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <View style={{flex: 5, height: '1%'}}>
                  <TouchableOpacity style={styles.onlineStatus}>
                    <Text>My Account</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flex: 1, height: '1%'}}>
                  <TouchableOpacity style={styles.onlineStatus}>
                    <Text>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={() => setName(name)}
                placeholder="NAME"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={() => setLastName(lastName)}
                placeholder="LAST NAME"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={() => setPhone(phone)}
                setPhone
                placeholder="PHONE"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Settings')}
              style={styles.buttonStyle}
              activeOpacity={0.5}>
              <Text style={styles.changePassword}>Changed pwa</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
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
  textHeader: {
    fontSize: 20,
    padding: 20,
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    borderBottomWidth: 0.3,
  },
  inputStyle: {
    flex: 1,
    color: '#000000',
    paddingLeft: 15,
    paddingRight: 15,
  },
  changePassword: {
    color: '#000',
    fontSize: 25,
    marginLeft: 35,
    fontWeight: '100',
  },
});

export default ProfileEdit;
