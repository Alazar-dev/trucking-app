import React, {useState} from 'react';
import {TouchableOpacity, View, Modal, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const WelcomeModal = (props) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Welcome to Trucking app</Text>
          <Text style={styles.paragraph}>
            To begin your service please enter details of your vehicle
          </Text>
          <View
            style={{
              marginTop: 40,
            }}
          />
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => {
              navigation.navigate('VehicleDetail');
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.textStyle}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default WelcomeModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 22,
    marginBottom: 15,
    textAlign: 'center',
  },
  paragraph: {
    textAlign: 'center',
  },
  button: {
    padding: 10,
  },
  textStyle: {
    color: '#2196F3',
    fontSize: 25,
    textAlign: 'center',
  },
});
