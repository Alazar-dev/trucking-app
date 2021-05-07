import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
export default function OrderDetail(props) {
  return (
    <View>
      <ScrollView scrollEnabled={true}>
        <View style={{flexDirection: 'row', margin: 20, marginBottom: 30}}>
          <View style={{flex: 2}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Settings')}>
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{flex: 4}}>
            <Text style={{fontSize: 24}}>Weakly Payout</Text>
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
        <TouchableOpacity
          onPress={() => props.navigation.navigate('OrderDetailBid')}
          style={styles.buttonStyle}
          activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>BID</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('PickupRequests')}
          style={styles.buttonTwoStyle}
          activeOpacity={0.5}>
          <Text style={styles.buttonTextStyleTwo}>No Thanks</Text>
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
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
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
    color: '#000000',
    paddingVertical: 10,
    fontSize: 18,
  },
  buttonTextStyleTwo: {
    color: '#20b2aa',
    paddingVertical: 10,
    fontSize: 18,
  },
});
