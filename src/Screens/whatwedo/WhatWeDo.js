import React, {useState, useContext, createRef} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Button,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from 'react-native';
import AuthContext from 'helpers/AuthContext';

const WhatWeDo = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errortext, setErrortext] = useState('');
  const [loading, setLoadign] = useState('');
  const passwordInputRef = createRef();

  const {signIn} = useContext(AuthContext);

  return (
    <View style={styles.mainBody}>
      {/* <Loader loading={loading} /> */}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/Logo.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <Text style={styles.title}>Lives over rides</Text>
            <Text style={styles.paragraph}>
              Your schedule, your choice. Trucking app drivers choose when and
              how they want to work, so spending time with family is an option
              again.
            </Text>
          </KeyboardAvoidingView>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Fast');
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>NEXT</Text>
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
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#20b2aa',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 18,
  },
  inputStyle: {
    flex: 1,
    color: '#000000',
    paddingLeft: 15,
    paddingRight: 15,
  },
  registerTextStyle: {
    color: '#20b2aa',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  title: {
    textAlign: 'center',
    color: '#20b2aa',
    fontSize: 30,
  },
  paragraph: {
    textAlign: 'center',
    padding: 20,
    color: '#8b9cb5',
  },
  button: {
    backgroundColor: '#20b2aa',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonText: {
    color: '#000000',
    paddingVertical: 10,
    fontSize: 18,
  },
});

export default WhatWeDo;
