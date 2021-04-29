import React from 'react';
import {ScrollView, View} from 'react-native';
import Profile from '../../components/settings/Profile';
import ProfileDetail from '../../components/settings/ProfileDetail';

import HeaderSetting from '../../components/settings/HeaderSetting';

const Setting = () => {
  return (
    <View>
      <ScrollView>
        <HeaderSetting />
        <Profile />
        <ProfileDetail />
      </ScrollView>
    </View>
  );
};

export default Setting;
