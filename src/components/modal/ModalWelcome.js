import React, {useState} from 'react';
import {TouchableOpacity, View, Modal, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const WelcomeModal = () => {
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
              marginTop: 35,
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
    margin: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 28,
    alignItems: 'center',
    shadowColor: '#000',
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
  textStyle: {
    color: '#2196F3',
    fontSize: 23,
    textAlign: 'center',
  },
});
