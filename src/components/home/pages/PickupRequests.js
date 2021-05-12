import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
// import {Avatar} from 'react-native-paper';
export default function PickupRequests(props) {
  return (
    <View>
      <ScrollView>
        <View
          style={[
            styles.container,
            {
              flexDirection: 'row',
            },
          ]}>
          <View style={{flex: 6}}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{flex: 11}}>
            <Text style={styles.topText}>Pickup Requests</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={styles.filter}>Filter</Text>
          </View>
        </View>
        <View style={styles.container}>
          {vehicles.map((vehicle) => {
            return (
              <View
                key={vehicle.id}
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#9e9e9e',
                }}>
                <View style={{flex: 1}}>
                  {/*<Avatar.Image size={30} source={vehicle.photo} />*/}
                </View>
                <View style={{flex: 4}}>
                  <Text style={{fontSize: 18}}>{vehicle.name}</Text>
                  <Text style={{fontSize: 18, color: 'red'}}>
                    {vehicle.type}
                  </Text>
                  <Text style={{fontSize: 18, color: '#767577'}}>
                    {vehicle.meters}
                  </Text>
                  <Text style={{fontSize: 18, color: '#767577'}}>
                    {vehicle.miles}
                  </Text>
                </View>
                <View style={{flex: 2}}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('OrderDetail')}>
                    <Text style={{fontSize: 18, color: '#2baab2'}}>
                      See Detail
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('OrderDetailBid')}>
                    <Text
                      style={[
                        {fontSize: 18, backgroundColor: '#2baab2'},
                        styles.bid,
                      ]}>
                      BID
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const vehicles = [
  {
    id: 1,
    name: 'Alejandro Lopez',
    photo: require('../../../assets/freightliner.jpeg'),
    type: 'Urgent',
    meters: '2 meter away',
    miles: '13 miles drive',
  },
  {
    id: 2,
    name: 'Alejandro Lopez',
    photo: require('../../../assets/van.jpeg'),
    type: 'Urgent',
    meters: '2 meter away',
    miles: '13 miles drive',
  },
  {
    id: 3,
    name: 'Alejandro Lopez',
    photo: require('../../../assets/van.jpeg'),
    type: 'Urgent',
    meters: '2 meter away',
    miles: '13 miles drive',
  },
  {
    id: 4,
    name: 'Alejandro Lopez',
    photo: require('../../../assets/van.jpeg'),
    type: 'Urgent',
    meters: '2 meter away',
    miles: '13 miles drive',
  },
  {
    id: 5,
    name: 'Alejandro Lopez',
    photo: require('../../../assets/van.jpeg'),
    type: 'Urgent',
    meters: '2 meter away',
    miles: '13 miles drive',
  },
  {
    id: 6,
    name: 'Alejandro Lopez',
    photo: require('../../../assets/van.jpeg'),
    type: 'Urgent',
    meters: '2 meter away',
    miles: '13 miles drive',
  },
];

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  topText: {
    fontSize: 20,
  },
  filter: {
    borderRadius: 50,
    borderWidth: 2,
    color: '#2baab2',
    borderColor: '#2baab2',
    textAlign: 'center',
    padding: 2,
  },
  bid: {
    borderRadius: 50,
    borderWidth: 2,
    color: '#fff',
    borderColor: '#2baab2',
    textAlign: 'center',
    padding: 2,
  },
});
