import React from 'react';
import {ScrollView} from 'react-native';
import {Container} from 'components';

import HeaderEarnings from '../../components/earnings/HeaderEarnings';
import EarningChart from '../../components/chart/EarningChart';

const Cart = () => {
  return (
    <Container>
      <HeaderEarnings />
      <ScrollView>
        <EarningChart />
      </ScrollView>
    </Container>
  );
};

export default Cart;
