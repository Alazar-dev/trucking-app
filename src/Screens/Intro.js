// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React from 'react';

// import all the components we are going to use
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const Intro = (props) => {
  const onDone = () => {
    props.navigation.navigate('SignIn');
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <StatusBar backgroundColor={'#F9FAFA'} barStyle={'dark-content'} />
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        renderNextButton={() => (
          <View
            style={{
              backgroundColor: '#20b2aa',
              borderWidth: 0,
              color: '#FFFFFF',
              borderColor: '#7DE24E',
              height: 50,
              alignItems: 'center',
              borderRadius: 30,
              marginLeft: 35,
              marginRight: 35,
              marginTop: 20,
              marginBottom: 25,
              justifyContent: 'center',
            }}>
            <Ionicons
              color="rgba(255, 255, 255, .9)"
              size={24}
              style={{backgroundColor: 'transparent'}}>
              NEXT
            </Ionicons>
          </View>
        )}
        renderDoneButton={() => (
          <View
            style={{
              backgroundColor: '#20b2aa',
              borderWidth: 0,
              color: '#FFFFFF',
              borderColor: '#7DE24E',
              height: 50,
              alignItems: 'center',
              borderRadius: 30,
              marginLeft: 35,
              marginRight: 35,
              marginTop: 20,
              marginBottom: 25,
              justifyContent: 'center',
            }}>
            <Ionicons
              color="rgba(255, 255, 255, .9)"
              size={24}
              style={{backgroundColor: 'transparent'}}>
              DONE
            </Ionicons>
          </View>
        )}
        onDone={onDone}
        bottomButton={true}
        activeDotStyle={{backgroundColor: '#2baab2'}}
      />
    </>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: '50%',
    height: 100,
    resizeMode: 'contain',
    margin: 30,
  },
  introTextStyle: {
    fontSize: 18,
    color: '#C2BBBA',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: '#2baab2',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Your schedule, your choice. Trucking app driver choose when and how they want to work, sospending time with family is an option again',
    title: 'Lives over rides',
    image: require('../assets/Logo.png'),
  },
  {
    key: 's2',
    title: 'Fast',
    text: 'Your schedule, your choice. Trucking app driver choose when and how they want to work, sospending time with family is an option again',
    image: require('../assets/Logo.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Reliable',
    text: 'Your schedule, your choice. Trucking app driver choose when and how they want to work, sospending time with family is an option again',
    image: require('../assets/Logo.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: 'Up to date',
    text: 'Your schedule, your choice. Trucking app driver choose when and how they want to work, sospending time with family is an option again',
    image: require('../assets/Logo.png'),
    backgroundColor: '#3395ff',
  },
];
