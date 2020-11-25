import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
let camera;

export default function CameraGallery() {
  const [startCamera, setStartCamera] = useState(false);

  const __startCamera = () => {};
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Camera
          style={{ flex: 1, width: '100%' }}
          ref={(res) => {
            camera = res;
          }}
        ></Camera>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
