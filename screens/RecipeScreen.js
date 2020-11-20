import React, { useState } from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import RecipePicker from '../components/RecipePicker';

const DATA = [
  {
    id: '0',
    text: 'Black tea',
  },
  {
    id: '1',
    text: 'White tea',
  },
];

// How to make button delete DATA through ID?
const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text>{item.text}</Text>
    <Button title="DELETE" color="#15D" />
  </TouchableOpacity>
);

const RecipeScreen = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#BADA55' : '#DE7411';
    return <Item item={item} onPress={() => setSelectedId(item.id)} style={{ backgroundColor }} />;
  };

  return (
    <View>
      <Text style={styles.LabelText}>Brew Name</Text>
      <TextInput style={styles.input} />
      <Text style={styles.LabelText}>Brewer</Text>
      <TextInput style={styles.input} />
      <Text style={styles.LabelText}>Stage</Text>
      <RecipePicker />

      <FlatList
        extraData={selectedId}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.LabelText}>Starting PH</Text>
      <TextInput keyboardType="decimal-pad" style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  LabelText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    marginVertical: 10,
    height: 40,
    width: Dimensions.get('window').width - 100,
    padding: 5,
    borderRadius: 5,
  },
});

export default RecipeScreen;
