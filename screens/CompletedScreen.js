import React from 'react';
import { View, Text } from 'react-native';

function CompletedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Completed!</Text>
      <Text>This will show list of ACTIVE kombucha brews</Text>
    </View>
  );
}

export default CompletedScreen;
