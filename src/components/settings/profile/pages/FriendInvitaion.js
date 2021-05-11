import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default function Vehicles(props) {
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
            <Text style={styles.header}>Invite a Friend</Text>
          </View>
        </View>
        <View style={{paddingTop: 30}}>
          {/* <FontAwesome name="square" size={24} color="#2baab2" /> */}
          <Text style={styles.slug}>Your code is DF9382UI</Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 19,
              padding: 20,
            }}>
            Lets take the city back, together.
          </Text>
          <Text style={{textAlign: 'center', paddingVertical: 20}}>
            Invite a driver to KEY Driver today. Because every time you refer a
            new driver our coommunity gets stronger.
          </Text>
        </View>
        {invitationMedias.map((invitation) => {
          return (
            <View
              key={invitation.id}
              style={{flexDirection: 'row', paddingHorizontal: 10}}>
              <View style={{flex: 3, paddingVertical: 10}}>
                <TouchableOpacity>
                  <Text style={styles.notification}>{invitation.name}</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
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
    borderWidth: 2,
    borderRadius: 200,
    paddingVertical: 20,
    textAlign: 'center',
  },
});

const invitationMedias = [
  {
    id: 1,
    name: 'SMS',
  },
  {
    id: 2,
    name: 'Twitter',
  },
  {
    id: 3,
    name: 'Facebook',
  },
];
