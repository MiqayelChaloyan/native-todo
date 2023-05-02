import GlobalContext from '../../../context/GlobalContext';
import React, {useContext, useEffect} from 'react';

import {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MyInput from '../../../components/myInput/MyInput';
import styles from './style';
import ImageUpload from '../../../components/imageUpload/ImageUpload';

const AddScreen = ({navigation, route}) => {
  const {addTodo} = useContext(GlobalContext);
  const [image, setImageValue] = useState(null);
  const [text, setNewText] = useState('');

  useEffect(() => setNewText(''), [addTodo]);

  const handleChange = newText => setNewText(newText);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.modal}>
          <View
            style={{
              top: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {text.length > 0 && (
              <Text style={styles.title}>Want to add to your to-do list ?</Text>
            )}
            <Text>{text}</Text>
          </View>
          <View style={styles.textView}>
            <View style={[styles.elevation, styles.card]}>
              <View>
                <MyInput handleChange={handleChange} item={text} />
              </View>
            </View>
            <View>
              <ImageUpload setImageValue={setImageValue} />
            </View>
          </View>
          <View style={[styles.buttonsView, {top: text.length > 0 ? 60 : 60}]}>
            <TouchableOpacity style={styles.touchableOpacity}>
              <Text
                style={styles.text}
                onPress={() => {
                  addTodo(text, image);
                  return navigation.navigate('Home');
                }}>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddScreen;
