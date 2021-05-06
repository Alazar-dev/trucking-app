import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from 'react-native-picker-dropdown';
import {Feather, Fontisto} from '@expo/vector-icons';

export default class HeaderHome extends Component {
  constructor(props) {
    super(props);
    this.state = {vehicle: 'freightliner'};
    this.onValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(vehicle) {
    this.setState({vehicle});
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          {
            flexDirection: 'row',
          },
        ]}>
        <View style={{flex: 2.5}}>
          <Feather name="message-circle" size={24} color="#20b2aa" />
        </View>
        <View style={{flex: 5, marginTop: '-4%'}}>
          <Picker
            style={{
              height: 50,
              width: 159,
              color: 'white',
            }}
            selectedValue={this.state.vehicle}
            onValueChange={this.onValueChange}
            mode="dialog">
            <Picker.Item label="Freightliner" value="freightliner" />
            <Picker.Item label="Volvo" value="toyota" />
          </Picker>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Fontisto name="bell" size={24} color="#2baab2" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  topText: {
    fontSize: 20,
  },
});
