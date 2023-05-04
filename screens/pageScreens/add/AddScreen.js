import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
//components
import MyInput from '../../../components/myInput/MyInput';
import ImageUpload from '../../../components/imageUpload/ImageUpload';
// context
import GlobalContext from '../../../context/GlobalContext';
// styles
import styles from './style';

const AddScreen = ({navigation}) => {
  const {addTodo} = useContext(GlobalContext);
  const [image, setImageValue] = useState(null);
  const [err, setErr] = useState(false);
  const [text, setNewText] = useState('');

  useEffect(() => {
    setNewText('');
    setImageValue(null);
  }, [addTodo]);

  useEffect(() => setErr(false), [text.length > 0]);

  const handleChange = newText => setNewText(newText);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.addList}>
            {text.length > 0 && (
              <Text style={styles.title}>Want to add to your to-do list ?</Text>
            )}
            <Text>{text}</Text>
          </View>
          <View style={styles.textView}>
            <View style={[styles.elevation, styles.card]}>
              <View>
                <MyInput handleChange={handleChange} item={text} />
                <Text style={styles.error}>
                  {err ? 'The field must not be empty' : null}
                </Text>
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
                  if (text.trim() !== '') {
                    addTodo(text, image);
                    return navigation.navigate('Home');
                  } else {
                    setErr(true);
                  }
                  // addTodo(text, image);
                  // return navigation.navigate('Home');
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
