import React, {useContext} from 'react';
import {View, Text, StyleSheet, PermissionsAndroid} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import GlobalContext from '../../../../../../context/GlobalContext';
import AddImageIcon from '../../../icons/AddImage.svg';

const Camera = () => {
  const {setImageUrl} = useContext(GlobalContext);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        selectFile();
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const selectFile = () => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, res => {
      const url = res?.assets && res.assets[0].uri;
      setImageUrl(url);
    });
  };

  return (
    <View style={styles.body}>
      <Text onPress={requestCameraPermission}>
        <AddImageIcon width={50} height={50} />
      </Text>
    </View>
  );
};

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

export default Camera;
