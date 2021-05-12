import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default function Documents(props) {
  return (
    <ScrollView>
      <View style={{flexDirection: 'row', margin: 20, marginBottom: 30}}>
        <View style={{flex: 2}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Settings')}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 4}}>
          <Text style={styles.header}>Documents</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.onlineStatus}>
        <Text style={styles.buttonText}>My Documents</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 30}}>
              <Text style={{color: '#000', fontSize: 20}}>
                Driver's License
              </Text>
              <Text style={{color: '#595959', fontSize: 15}}>
                Expiration 26/01/2019
              </Text>
            </View>
            <View style={{height: '55%', flex: 3}}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 30}}>
              <Text style={{color: '#000', fontSize: 20}}>
                Business License
              </Text>
              <Text style={{color: '#595959', fontSize: 15}}>
                Expiration 26/01/2019
              </Text>
            </View>
            <View style={{height: '55%', flex: 3}}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 30}}>
              <Text style={{color: '#000', fontSize: 20}}>DOT Number</Text>
              <Text style={{color: '#595959', fontSize: 15}}>
                Expiration 26/01/2019
              </Text>
            </View>
            <View style={{height: '55%', flex: 3}}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 30}}>
              <Text style={{color: '#000', fontSize: 20}}>MC Number</Text>
              <Text style={{color: '#595959', fontSize: 15}}>
                Expiration 26/01/2019
              </Text>
            </View>
            <View style={{height: '55%', flex: 3}}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.onlineStatus}>
        <Text style={styles.buttonText}>Vehicles</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 30}}>
              <Text style={{color: '#000', fontSize: 20}}>Registration</Text>
            </View>
            <View style={{height: '55%', flex: 3}}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 30}}>
              <Text style={{color: '#000', fontSize: 20}}>Insurance</Text>
              <Text style={{color: '#595959', fontSize: 15}}>
                Expiration 26/01/2019
              </Text>
            </View>
            <View style={{height: '55%', flex: 3}}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 30}}>
              <Text style={{color: '#000', fontSize: 20}}>
                Trailor Insurance
              </Text>
              <Text style={{color: '#595959', fontSize: 15}}>
                Expiration 26/01/2019
              </Text>
            </View>
            <View style={{height: '55%', flex: 3}}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {fontSize: 20},
  onlineStatus: {
    backgroundColor: '#c9cdd4',
  },
  buttonText: {
    padding: 10,
    color: '#000',
  },
});
