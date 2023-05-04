import React, {useContext, useEffect, useState} from 'react';
import {
  TextInput,
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import {gStyle} from '../../../styles/styles';
import {todoDataContext} from '../../Data/TodoData';
import {launchImageLibrary} from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-picker';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

export default function Camera() {
  const [downloadedImageUri, setDownloadedImageUri] = useState(null);

  useEffect(() => {
    console.log(downloadedImageUri);
  }, [downloadedImageUri]);

  const checkPermission = async () => {
    try {
      const result = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
      if (result === RESULTS.GRANTED) {
        chooseImage();
      } else if (result === RESULTS.DENIED) {
        requestPermission();
      } else if (result === RESULTS.BLOCKED) {
        Alert.alert(
          'Permission blocked',
          'Please go to settings and enable permission to access the photo library.',
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const requestPermission = async () => {
    try {
      const result = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
      if (result === RESULTS.GRANTED) {
        chooseImage();
      } else if (result === RESULTS.DENIED) {
        Alert.alert(
          'Permission denied',
          'We cannot access your photo library if you do not grant permission.',
        );
      } else if (result === RESULTS.BLOCKED) {
        Alert.alert(
          'Permission blocked',
          'Please go to settings and enable permission to access the photo library.',
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const chooseImage = () => {
    launchImageLibrary({}, response => {
      if (response.uri) {
        setDownloadedImageUri(response.uri);
      }
    });
  };

  return (
    <View style={styles.body}>
      <Button title="request permissions" onPress={checkPermission} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
