import React from 'react';
import {ScrollView, View} from 'react-native';
import Profile from '../../components/settings/Profile';

import HeaderSetting from '../../components/settings/HeaderSetting';

const Setting = () => {
  return (
    <View>
      <ScrollView>
        <HeaderSetting />
        <Profile />
      </ScrollView>
    </View>
  );
};

export default Setting;
