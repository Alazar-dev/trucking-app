import React from 'react';
import {ScrollView, Text} from 'react-native';
import {Container, Toolbar} from 'components';
// import Map from '../components/Map';

const Cart = () => {
  return (
    <Container>
      <Toolbar title="Cart" />
      <ScrollView>
        <Text>Earnings</Text>
        {/* <Map /> */}
      </ScrollView>
    </Container>
  );
};

export default Cart;
