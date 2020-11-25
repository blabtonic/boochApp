import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import * as Permission from 'expo-permissions';
import { Camera } from 'expo-camera';

export default class CameraGallery extends Component {
  camera = null;

  state = {
    hasCameraPermission: null,
  };
  render() {
    const { hasCameraPermission } = this.state;
    return (
      <View>
        <Camera ref={(camera) => (this.camera = camera)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
