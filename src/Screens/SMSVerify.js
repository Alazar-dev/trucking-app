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

const SMSVerify = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errortext, setErrortext] = useState('');
  const [loading, setLoadign] = useState('');
  const passwordInputRef = createRef();

  const {sMSVerify} = useContext(AuthContext);

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
                source={require('../assets/Logo.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <Text style={{textAlign: 'center', fontSize: 20, padding: 20}}>
              Please type the verification code sent via SMS to:
            </Text>
            <Text style={{textAlign: 'center', fontSize: 20, padding: 20}}>
              +52 1 9992 7880 79
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  autoCapitalize="none"
                  keyboardType="numeric"
                  returnKeyType="next"
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  keyboardType="numeric"
                  ref={passwordInputRef}
                  onSubmitEditing={Keyboard.dismiss}
                  secureTextEntry={true}
                  returnKeyType="next"
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  autoCapitalize="none"
                  keyboardType="numeric"
                  returnKeyType="next"
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  keyboardType="numeric"
                  ref={passwordInputRef}
                  onSubmitEditing={Keyboard.dismiss}
                  secureTextEntry={true}
                  returnKeyType="next"
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  keyboardType="numeric"
                  ref={passwordInputRef}
                  onSubmitEditing={Keyboard.dismiss}
                  secureTextEntry={true}
                  returnKeyType="next"
                />
              </View>
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Home')}
              style={styles.buttonStyle}
              activeOpacity={0.5}>
              <Text style={styles.buttonTextStyle}>Verify</Text>
            </TouchableOpacity>
            <Text style={styles.registerTextStyle}>Did not receive code?</Text>
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
  SectionStyle: {
    height: 40,
    marginTop: 20,
    margin: 10,
    borderBottomWidth: 2,
    width: 34,
    flex: 12,
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
    color: '#595959',
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
});

export default SMSVerify;
