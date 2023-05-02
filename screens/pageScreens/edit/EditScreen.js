import {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import GlobalContext from '../../../context/GlobalContext';
import MyInput from '../../../components/myInput/MyInput';
import styles from './style';

function EditScreen({navigation, route}) {
  const {editTodo, setElement} = useContext(GlobalContext);
  const {item, id} = route?.params;
  const [err, setErr] = useState(false);
  const [newText, setNewText] = useState(item.title);

  useEffect(() => setNewText(item.title), [item]);

  useEffect(() => setErr(false), [newText.length > 0]);

  useEffect(() => item && id && setElement({item, id}), [item]);

  const handleChange = newText => setNewText(newText);

  const fieldCheckInput = () => {
    if (newText.trim() !== '') {
      editTodo(id, newText);
      navigation.navigate('Home');
    } else {
      setErr(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.task}>
        <Text style={styles.myTask}>{item.title}</Text>
      </View>
      <View style={styles.contain}>
        <View>
          <MyInput handleChange={handleChange} item={newText} />
          <Text style={styles.error}>
            {err ? 'The field must not be empty' : null}
          </Text>
        </View>
        <View style={styles.buttonsGroup}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText} onPress={fieldCheckInput}>
              Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View>
              <Text style={styles.btnText} onPress={() => navigation.goBack()}>
                Cancel
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default EditScreen;
