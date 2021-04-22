/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, View} from 'react-native';

import WelcomeModal from '../components/modal/ModalWelcome';
import Map from '../components/Map';
import Status from '../components/home/Status';

const Home = (props) => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <Map />
      <WelcomeModal />
      <Status />
    </View>
  );
};

export default Home;
