import {useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import styles from './style';
// asyncStorage

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState('');

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
    <View style={{marginBottom: 40}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View>
          <Text>Add a picture</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={selectFile}>
            <Text style={styles.text}>Upload</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 90}}>
        <Image
          source={{uri: imageUrl}}
          style={{width: 280, height: 300, borderRadius: 7}}
        />
      </View>
    </View>
  );
};

export default ImageUpload;
