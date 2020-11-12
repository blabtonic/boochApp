import React from 'react';
import { View, Text } from 'react-native';

function ActiveScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ActiveScreen</Text>
      <Text>This will show list of ACTIVE kombucha brews</Text>
    </View>
  );
}

export default ActiveScreen;
