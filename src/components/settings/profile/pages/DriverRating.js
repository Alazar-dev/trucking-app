import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import ProgressCircle from 'react-native-progress-circle';

export default function DriverRating(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 2}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Settings')}>
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{flex: 5}}>
            <Text style={styles.header}>My Driver Rating</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 4,
            justifyContent: 'center',
            paddingTop: 30,
            AlignItems: 'center',
          }}>
          <ProgressCircle
            percent={98.3}
            radius={75}
            borderWidth={8}
            color="#000"
            shadowColor="#fff"
            bgColor="#fff">
            <Text style={{fontSize: 18}}>{'98.3%'}</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#2baab2'}}>
              Good
            </Text>
          </ProgressCircle>
        </View>
        <View style={{paddingVertical: 30}}>
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '200'}}>
            Updated: Today
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: '#2baab2',
              paddingVertical: 30,
            }}>
            The percentage of this driver resulted in a great customer
            experience.
          </Text>
        </View>
        <View style={{flex: 1, paddingVertical: 10, flexDirection: 'row'}}>
          {ratings.map((rating) => {
            return (
              <View key={rating.id} style={{flex: 1, paddingVertical: 10}}>
                <Text style={styles.notification}>{rating.percentage}</Text>
                <Text style={[styles.notification, {color: '#8b9cb5'}]}>
                  {rating.time}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={{flex: 1, paddingVertical: 10, flexDirection: 'row'}}>
          {completedTasks.map((completed) => {
            return (
              <View key={completed.id} style={{flex: 1, paddingVertical: 10}}>
                <Text style={styles.notification}>{completed.amount}</Text>
                <Text style={[styles.notification, {color: '#8b9cb5'}]}>
                  {completed.time}
                </Text>
              </View>
            );
          })}
        </View>
        <Text
          style={[
            styles.notification,
            {color: '#8b9cb5', paddingVertical: 40},
          ]}>
          Your satisfaction rate is based in the ratings that your previous
          customers have given.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {fontSize: 20},
  slug: {
    textAlign: 'center',
    paddingVertical: 10,
    color: '#2baab2',
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 200,
  },
  notification: {
    textAlign: 'center',
  },
});

const ratings = [
  {
    id: 1,
    percentage: '100%',
    time: 'Yesterday',
  },
  {
    id: 2,
    percentage: '93.5%',
    time: 'This Week',
  },
  {
    id: 3,
    percentage: '98.2%',
    time: 'Last 30 Days',
  },
];
const completedTasks = [
  {
    id: 1,
    amount: '2,450',
    time: 'Trips Completed',
  },
];
