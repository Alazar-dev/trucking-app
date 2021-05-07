import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function PickupRequests() {
  return (
    <View>
      <ScrollView>
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
              <View style={{flex: 4}}>
                <Text style={{fontSize: 18, color: '#20b2aa'}}>
                  {vehicle.company}
                </Text>
                <Text style={{fontSize: 18, color: '#000'}}>
                  {vehicle.location}
                </Text>
                <Text style={{fontSize: 18, color: '#767577'}}>
                  View order detail
                </Text>
              </View>
              <View style={{flex: 2}}>
                <TouchableOpacity>
                  <Text style={styles.status}>{vehicle.status}</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 18, textAlign: 'center'}}>
                  {vehicle.totalEarn}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const vehicles = [
  {
    id: 1,
    company: 'ABC trading - Order # 40',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    totalEarn: '150$',
    status: 'completed',
  },
  {
    id: 2,
    company: 'XYZ Incorporated - Order # 41',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    totalEarn: '0$',
    status: 'pending',
  },
  {
    id: 3,
    company: 'XYZ Incorporated - Order # 41',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    totalEarn: '30$',
    status: 'completed',
  },
  {
    id: 4,
    company: 'XYZ Incorporated - Order # 41',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    totalEarn: '0$',
    status: 'failed',
  },
  {
    id: 5,
    company: 'XYZ Incorporated - Order # 41',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    totalEarn: '2000$',
    status: 'completed',
  },
  {
    id: 6,
    company: 'Alejandro Lopez',
    location: '24th Street, Peachtree, Atlanta, Georgia 40203',
    totalEarn: '0$',
    status: 'pending',
  },
];

const styles = StyleSheet.create({
  status: {
    borderRadius: 50,
    borderWidth: 2,
    color: '#000',
    borderColor: '#2baab2',
    textAlign: 'center',
    padding: 2,
  },
});
