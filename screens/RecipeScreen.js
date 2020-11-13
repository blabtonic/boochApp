import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

function RecipeScreen() {
  return (
    <View>
      <Text style={styles.LabelText}>Name</Text>
      <TextInput style={{ height: 60, fontSize: 28, borderColor: 'red', borderWidth: 2 }} />
      <Text style={styles.LabelText}>Brewer</Text>
      <TextInput style={{ height: 60, fontSize: 28, borderColor: 'red', borderWidth: 2 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  LabelText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default RecipeScreen;
