import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Searchbar} from 'react-native-paper';

import {AntDesign, FontAwesome, Entypo} from '@expo/vector-icons';

const Podcast = (props) => {
  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          alignContent: 'center',
        }}>
        <View style={{backgroundColor: 'linear-gradient(red, yellow)'}}>
          <View style={{flexDirection: 'row', margin: 20, marginBottom: 30}}>
            <View style={{flex: 2}}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Settings')}>
                <AntDesign name="left" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{flex: 3}}>
              <Text style={[styles.header, {fontSize: 20}]}>Podcast</Text>
            </View>
          </View>
          <View>
            <KeyboardAvoidingView enabled>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.mainText}>Joe Rogan podcast</Text>
                <Text
                  style={
                    (styles.mainText,
                    {
                      fontSize: 23,
                      color: '#595959',
                      backgroundColor: 'linear-gradient(red, yellow)',
                    })
                  }>
                  Episode 21
                </Text>
                <Text>00.00.00</Text>
                <View
                  style={{
                    //   width: '50%',
                    height: 100,
                    resizeMode: 'contain',
                    margin: 30,
                  }}>
                  <TouchableOpacity>
                    <FontAwesome name="power-off" size={100} color="#2baab2" />
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
        <View style={{margin: 20, paddingTop: 20}}>
          <Searchbar placeholder="Search" />
        </View>
        {podcasts.map((podcast) => (
          <View style={{flexDirection: 'row', padding: 10}}>
            <View style={{flex: 2, marginLeft: 5}}>
              <Entypo name="dot-single" size={30} color="#2baab2" />
            </View>
            <View style={{flex: 12}}>
              <Text>{podcast.title}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  mainText: {
    color: '#000',
    fontSize: 30,
  },
});

const podcasts = [
  {
    title: 'HOT TIME! Get Online Now!',
  },
  {
    title: 'HOT TIME! Get Online Now!',
  },
  {
    title: 'HOT TIME! Get Online Now!',
  },
  {
    title: 'HOT TIME! Get Online Now!',
  },
  {
    title: 'HOT TIME! Get Online Now!',
  },
  {
    title: 'HOT TIME! Get Online Now!',
  },
];

export default Podcast;
