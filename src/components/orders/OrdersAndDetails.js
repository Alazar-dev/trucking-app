import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import ScheduledOrdersData from './ScheduledOrdersData';
import OrdersData from './OrdersData';
import {AntDesign} from '@expo/vector-icons';

export default function OrdersAndDetails(props) {
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);
  const onHide = () => setShowResults(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={{flexDirection: 'row', margin: 20, marginBottom: 30}}>
              <View style={{flex: 3}}>
                <TouchableOpacity onPress={onHide}>
                  <Text style={{textAlign: 'center'}}>ORDERS</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 3}}>
                <TouchableOpacity onPress={onClick}>
                  <Text>SCHEDULED ORDERS</Text>
                </TouchableOpacity>
              </View>
            </View>
            {showResults ? <ScheduledOrdersData /> : <OrdersData />}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
