import React from 'react';
import {ScrollView, Text} from 'react-native';
import {Container, Toolbar} from 'components';

import HeaderSetting from '../../components/settings/HeaderSetting';

const Profile = () => {
  return (
    <Container>
      <ScrollView>
        <HeaderSetting />
        <Text>Setting</Text>
      </ScrollView>
    </Container>
  );
};

export default Profile;
