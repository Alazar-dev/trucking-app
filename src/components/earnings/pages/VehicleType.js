import React, {Component} from 'react';
import {View} from 'react-native';
import {Picker} from 'react-native-picker-dropdown';

class VehicleType extends Component {
  constructor(props) {
    super(props);
    this.state = {vehicle: 'Single bed'};
    this.onValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(vehicle) {
    this.setState({vehicle});
  }
  render() {
    return (
      <View>
        <Picker
          style={{
            height: 50,
            width: 159,
            color: 'white',
          }}
          selectedValue={this.state.vehicle}
          onValueChange={this.onValueChange}
          mode="dialog">
          <Picker.Item label="Single Bed" value="singleBed" />
          <Picker.Item label="Double Bed" value="doublebed" />
        </Picker>
      </View>
    );
  }
}

VehicleType.propTypes = {};

export default VehicleType;
