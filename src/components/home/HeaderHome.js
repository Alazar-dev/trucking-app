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
        <View style={{flex: 3}}>
          <Feather name="message-circle" size={24} color="#20b2aa" />
        </View>
        <View style={{flex: 7, marginTop: '-4%'}}>
          <Picker
            selectedValue={this.state.vehicle}
            onValueChange={this.onValueChange}
            mode="dialog"
            textStyle={styles.pickerText}>
            <Picker.Item label="Freightliner" value="freightliner" />
            <Picker.Item label="Toyota" value="toyota" />
          </Picker>
        </View>
        <View style={{flex: 2}}>
          <Fontisto name="bell-alt" size={24} color="black" />
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
