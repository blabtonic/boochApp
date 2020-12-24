import { Camera } from 'expo-camera';
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

// How to make button delete DATA through ID?
const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text>{item.text}</Text>
  </TouchableOpacity>
);

const RecipeScreen = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [initialElements, changeEl] = useState([{ id: '0', text: 'Add Tea' }]);

  const [listState, setListState] = useState(initialElements);
  const [idx, increment] = useState(0);

  // Adds new flatlist increments id by +1
  const addElement = () => {
    let newArray = [...initialElements, { id: idx, text: 'Tea' + (idx + 1) }];
    increment(idx + 1);
    console.log(initialElements.length);
    setListState(newArray);
    changeEl(newArray);
  };

  // deletes ALL elements need to delete individual elements
  const deleteElement = () => {
    let newArray = [-initialElements];
    console.log(initialElements.length);
    setListState(newArray);
    changeEl(newArray);
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#BADA55' : '#DE7411';
    return <Item item={item} onPress={() => setSelectedId(item.id)} style={{ backgroundColor }} />;
  };

  const CameraButton = (navigation) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Recipe')}
        style={{
          width: 130,
          borderRadius: 5,
          backgroundColor: '#8F00AD',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 40,
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          TAKE PHOTO
        </Text>
      </TouchableOpacity>
    );
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
        data={listState}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Button title="ADD" color="#24F413" onPress={addElement} />
      <Button title="DELETE" color="#BA0404" onPress={deleteElement} />
      <Text style={styles.LabelText}>Starting PH</Text>
      <TextInput keyboardType="decimal-pad" style={styles.input} />
      <Text style={styles.LabelText}>Starting Temp</Text>
      <TextInput keyboardType="decimal-pad" style={styles.input} />
      <CameraButton />
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
