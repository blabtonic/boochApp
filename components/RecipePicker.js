import React, { Component } from 'react';
import { Picker } from '@react-native-picker/picker';

class RecipePicker extends Component {
  state = {
    stage: 'First',
  };

  render() {
    return (
      <Picker
        selectedValue={this.state.stage}
        style={{ height: 40, width: 145 }}
        onValueChange={(itemValue, itemIndex) => this.setState({ stage: itemValue })}
      >
        <Picker.Item label="First" value="First" />
        <Picker.Item label="Secondary" value="Secondary" />
        <Picker.Item label="Completed" value="Completed" />
      </Picker>
    );
  }
}

export default RecipePicker;
