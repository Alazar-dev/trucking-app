import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Avatar} from 'react-native-paper';
import {Entypo} from '@expo/vector-icons';

export default function OrderDetailBid(props) {
  const [bid, setBid] = useState('Send');
  return (
    <View>
      <ScrollView>
        <View style={{flexDirection: 'row', margin: 20, marginBottom: 30}}>
          <View style={{flex: 2}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('OrderDetail')}>
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{flex: 4}}>
            <Text style={styles.header}>Order Detail</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', padding: 10}}>
          <View style={{flex: 1}}>
            <Avatar.Image
              size={30}
              source={require('../../../assets/xyz.jpeg')}
            />
          </View>
          <View style={{flex: 4}}>
            <Text style={{fontSize: 18}}>XYZ Company</Text>
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Entypo name="dot-single" size={60} color="green" />
            </View>
            <View style={{paddingVertical: 17}}>
              <Text style={{color: '#767577', fontSize: 20}}>Pickup point</Text>
            </View>
          </View>
          <Text style={{marginLeft: 25, fontSize: 17, paddingHorizontal: 10}}>
            2604 Washington Rd, Augusta , GA 30928
          </Text>
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Entypo name="dot-single" size={60} color="orange" />
            </View>
            <View style={{paddingVertical: 17}}>
              <Text style={{color: '#767577', fontSize: 20}}>
                Destination point
              </Text>
            </View>
          </View>
          <Text style={{marginLeft: 25, fontSize: 17, paddingHorizontal: 10}}>
            2604 Washington Rd, Augusta , GA 30928
          </Text>
        </View>
        <View style={{flexDirection: 'row', padding: 20}}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 18, color: '#767577'}}>Weight</Text>
            <Text style={{fontSize: 18, color: '#000'}}>234kg</Text>
          </View>
          <View style={{flex: 2}}>
            <Text style={{fontSize: 18, color: '#767577'}}>Load type</Text>
            <TouchableOpacity>
              <Text style={{fontSize: 18, color: '#000'}}>Breakable</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', padding: 20}}>
          <View style={{flex: 2}}>
            <Text style={{fontSize: 18, color: '#767577'}}>Weight</Text>
            <Text style={{fontSize: 18, color: '#000'}}>234kg</Text>
          </View>
          <View style={{flex: 2}}>
            <Text style={{fontSize: 18, color: '#767577'}}>Load type</Text>
            <TouchableOpacity>
              <Text style={{fontSize: 18, color: '#000'}}>Breakable</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 2}}>
            <Text style={{fontSize: 18, color: '#767577'}}>Load type</Text>
            <TouchableOpacity>
              <Text style={{fontSize: 18, color: '#000'}}>Breakable</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', padding: 20}}>
          <View style={{flex: 2}}>
            <Text style={{fontSize: 18, color: '#767577'}}>Pick time</Text>
            <Text style={{fontSize: 18, color: '#000'}}>
              Scheduled for Jan 12, 1:30pm
            </Text>
          </View>
        </View>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 50,
            width: '75%',
            paddingHorizontal: 20,
            alignItems: 'center',
            marginLeft: 35,
            marginRight: 35,
            marginBottom: 30,
          }}>
          124$/mile
        </TextInput>
        <TouchableOpacity
          onPress={() => {
            setBid('Sent');
            props.navigation.navigate('Home');
          }}
          style={styles.buttonStyle}
          activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>{bid}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
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
  buttonStyle: {
    backgroundColor: '#20b2aa',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 55,
    marginRight: 35,
    marginBottom: 25,
    width: '65%',
  },
  buttonTwoStyle: {
    borderWidth: 0,
    color: '#FFFFFF',
    alignItems: 'center',
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 30,
  },
  buttonTextStyle: {
    color: '#fff',
    paddingVertical: 10,
    fontSize: 18,
  },
  buttonTextStyleTwo: {
    color: '#20b2aa',
    fontSize: 18,
  },
});
