import React, { Component } from 'react';
import { FlatList, View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

class RecipeScreen extends Component {
  state = {
    stage: 'First',
  };
  render() {
    const DATA = [
      {
        id: '4bjd834t0i84-3i83er093',
        title: 'Black tea',
      },
    ];
    const Item = ({ title }) => (
      <View style={styles.item}>
        <Text>{title}</Text>
      </View>
    );

    const renderItem = ({ item }) => <Item title={item.title} />;

    return (
      <View>
        <Text style={styles.LabelText}>Brew Name</Text>
        <TextInput style={{ height: 60, fontSize: 28, borderColor: 'red', borderWidth: 2 }} />
        <Text style={styles.LabelText}>Brewer</Text>
        <TextInput style={{ height: 60, fontSize: 28, borderColor: 'red', borderWidth: 2 }} />
        <Text style={styles.LabelText}>Stage</Text>
        <Picker
          selectedValue={this.state.stage}
          style={{ height: 40, width: 145 }}
          onValueChange={(itemValue, itemIndex) => this.setState({ stage: itemValue })}
        >
          <Picker.Item label="First" value="First" />
          <Picker.Item label="Secondary" value="Secondary" />
          <Picker.Item label="Completed" value="Completed" />
        </Picker>
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
        <Text style={styles.LabelText}>Starting PH</Text>
        <TextInput style={{ height: 30, fontSize: 20, borderColor: 'red', borderWidth: 2 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  LabelText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default RecipeScreen;
