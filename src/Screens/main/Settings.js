import React from 'react';
import {ScrollView, View, StatusBar} from 'react-native';
import Profile from '../../components/settings/profile/Profile';
import ProfileDetail from '../../components/settings/profile/ProfileDetail';

import HeaderSetting from '../../components/settings/HeaderSetting';

const Settings = (props) => {
  return (
    <View>
      <StatusBar backgroundColor={'#F9FAFA'} barStyle={'dark-content'} />
      <ScrollView>
        <HeaderSetting />
        <Profile navigation={props.navigation} />
        <ProfileDetail navigation={props.navigation} />
      </ScrollView>
    </View>
  );
};

export default Settings;
