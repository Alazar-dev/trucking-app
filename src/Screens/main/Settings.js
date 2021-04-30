import React from 'react';
import {ScrollView, View} from 'react-native';
import Profile from '../../components/settings/profile/Profile';
import ProfileDetail from '../../components/settings/ProfileDetail';

import HeaderSetting from '../../components/settings/HeaderSetting';

const Setting = (props) => {
  return (
    <View>
      <ScrollView>
        <HeaderSetting />
        <Profile navigation={props.navigation} />
        <ProfileDetail />
      </ScrollView>
    </View>
  );
};

export default Setting;
