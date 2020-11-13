import React from 'react';
import { Button, View, Text } from 'react-native';

function ActiveScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ActiveScreen</Text>
      <Button title="Create Recipe" onPress={() => navigation.navigate('Recipe')} />
      <Text>This will show list of ACTIVE kombucha brews</Text>
    </View>
  );
}

export default ActiveScreen;
