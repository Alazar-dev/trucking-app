import React from 'react';
import {ScrollView, Text} from 'react-native';
import {Container, Toolbar} from 'components';

const Profile = () => {
  return (
    <Container>
      <Toolbar title="Profile" />
      <ScrollView>
        <Text>Settings</Text>
      </ScrollView>
    </Container>
  );
};

export default Profile;
