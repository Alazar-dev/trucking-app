import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Document = (props) => {
  return (
    <View style={styles.mainBody}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView enabled>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.mainText}>Document</Text>
          </View>
          <View style={styles.body}>
            <Text>
              One more thing and then you are done Attach your drivers Licence
            </Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>TAKE A PICTURE</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.linkText}>ATTACH DOCUMENT</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate('Home')}>
            <Text style={styles.buttonText}>DONE!</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    marginTop: 30,
  },
  mainText: {
    color: '#000000',
    fontSize: 30,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    paddingTop: 50,
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
    fontSize: 23,
  },
  linkText: {
    color: '#20b2aa',
    fontSize: 20,
  },
});

export default Document;
