import {useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import RemoveIcon from './Remove.svg';

import styles from './style';
// asyncStorage

const ImageUpload = ({setImageValue}) => {
  const [imageUrl, setImageUrl] = useState(null);

  const selectFile = () => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, res => {
      const url = res?.assets && res.assets[0].uri;
      setImageUrl(url);
      setImageValue(url);
    });
  };

  const removeImage = () => setImageUrl(null);

  return (
    <View style={{marginBottom: 40, marginTop: 5}}>
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
      <View style={{marginTop: 110}}>
        {imageUrl && (
          <Text style={styles.removeImage} onPress={removeImage}>
            <RemoveIcon width={30} height={30} fill="#55BCF6" zIndex={1} />
          </Text>
        )}
        <Image
          source={{uri: imageUrl}}
          style={{width: 280, height: 300, borderRadius: 7}}
        />
      </View>
    </View>
  );
};

export default ImageUpload;
