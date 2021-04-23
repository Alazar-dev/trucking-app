import React from 'react';
import {ScrollView, View} from 'react-native';
import {HeaderOrders} from '../../components/orders/HeaderOrders';

const Orders = () => {
  return (
    <View>
      <ScrollView>
        <HeaderOrders />
      </ScrollView>
    </View>
  );
};

export default Orders;
