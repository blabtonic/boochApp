import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

export default class CameraGallery extends Component {
  camera = null;

  state = {
    hasCameraPermission: null,
  };

  // when component is reach ask user for camera permissions. state = true
  async componentDidMount() {
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    const hasCameraPermission = camera.status === 'granted';

    this.setState({ hasCameraPermission });
  }
  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      Alert.alert('Unable to access Camera');
    }
    return (
      <View>
        <TouchableOpacity
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
        <Camera style={styles.preview} ref={(camera) => (this.camera = camera)} />
      </View>
    );
  }
}

const { width: winWidth, height: winHeight } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    height: winHeight,
    width: winWidth,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});
