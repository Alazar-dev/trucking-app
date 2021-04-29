import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import HeaderOrders from '../../components/orders/HeaderOrders';
import DataTable from '../../components/orders/DataTable';

const Orders = () => {
  return (
    <View>
      <ScrollView>
        <HeaderOrders />
        <TouchableOpacity style={styles.onlineStatus}>
          <Text style={styles.buttonText}>Today</Text>
        </TouchableOpacity>
        <DataTable />
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
