import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import HeaderOrders from '../../components/orders/HeaderOrders';

const Orders = () => {
  return (
    <View>
      <ScrollView>
        <HeaderOrders />
        <Text>Orders</Text>
      </ScrollView>
    </View>
  );
};

export default Orders;
