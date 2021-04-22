/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView, StatusBar} from 'react-native';

import WelcomeModal from '../components/modal/ModalWelcome';

const Home = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <WelcomeModal />
      </ScrollView>
    </>
  );
};

export default Home;
