import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {AntDesign} from '@expo/vector-icons';
import Camera from '../../components/Camera';
import DocumentPicker from '../../components/UploadDocument';

const Document = (props) => {
  const [showCamera, setShowCamera] = useState(false);
  const onClick = () => setShowCamera(true);
  return (
    <View style={styles.mainBody}>
      <View style={{flexDirection: 'row', margin: 20, marginBottom: 30}}>
        <View style={{flex: 2}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('VehicleDetail')}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 4}}>
          <Text style={[styles.header, {fontSize: 20}]}>Document</Text>
        </View>
      </View>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={styles.body}>
            <Text style={{textAlign: 'center', fontSize: 20}}>
              One more thing and then you are done Attach your drivers Licence
            </Text>
            <TouchableOpacity onPress={onClick}>
              {showCamera ? <Camera /> : null}
              <Text
                style={{
                  color: '#20b2aa',
                  fontSize: 20,
                }}>
                TAKE A PICTURE
              </Text>
            </TouchableOpacity>
            <DocumentPicker />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Home')}>
        <Text style={styles.buttonText}>DONE!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    backgroundColor: '#20b2aa',
    color: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 30,
    margin: 35,
  },
  buttonText: {
    color: '#000000',
    paddingVertical: 10,
    fontSize: 23,
  },
});

export default Document;
