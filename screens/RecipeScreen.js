import React, { useState } from 'react';
import { FlatList, View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import RecipePicker from '../components/RecipePicker';

const DATA = [
  {
    id: '4bjd834t0i84-3i83er093',
    title: 'Black tea',
  },
];
const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text>{item.title}</Text>
  </TouchableOpacity>
);

const RecipeScreen = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#BADA55' : '#C47';
    return <Item item={item} onPress={() => setSelectedId(item.id)} style={{ backgroundColor }} />;
  };

  return (
    <View>
      <Text style={styles.LabelText}>Brew Name</Text>
      <TextInput style={{ height: 60, fontSize: 28, borderColor: 'red', borderWidth: 2 }} />
      <Text style={styles.LabelText}>Brewer</Text>
      <TextInput style={{ height: 60, fontSize: 28, borderColor: 'red', borderWidth: 2 }} />
      <Text style={styles.LabelText}>Stage</Text>
      <RecipePicker />

      <FlatList
        extraData={selectedId}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.LabelText}>Starting PH</Text>
      <TextInput
        keyboardType="decimal-pad"
        style={{ height: 30, fontSize: 20, borderColor: 'red', borderWidth: 2 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  LabelText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default RecipeScreen;
