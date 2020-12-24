import React from 'react';
import { Button, View, Text } from 'react-native';

function CameraScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>CameraScreen</Text>
      <Button title="Create Recipe" onPress={() => navigation.navigate('Recipe')} />
      <Text>This will show camera with button</Text>
    </View>
  );
}

export default CameraScreen;
