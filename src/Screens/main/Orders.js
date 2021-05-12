import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import HeaderOrders from '../../components/orders/HeaderOrders';
import OrdersAndDetails from '../../components/orders/OrdersAndDetails';

const Orders = (props) => {
  return (
    <View>
      <StatusBar backgroundColor={'#F9FAFA'} barStyle={'dark-content'} />
      <ScrollView>
        <HeaderOrders />
        <TouchableOpacity style={styles.onlineStatus}>
          <Text style={styles.buttonText}>Recent</Text>
        </TouchableOpacity>
        {/* <DataTable /> */}
        <OrdersAndDetails navigation={props.navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  onlineStatus: {
    backgroundColor: '#c9cdd4',
  },
  buttonText: {
    padding: 10,
    color: '#000',
  },
});

export default Orders;
