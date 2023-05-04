import {useContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
// components
import List from '../../../components/list/List';
// context
import GlobalContext from '../../../context/GlobalContext';
// styles
import styles from './style';

const HomeScreen = ({navigation}) => {
  const {todos} = useContext(GlobalContext);
  const [complete, setisComplete] = useState(0);

  useEffect(() => {
    const result = todos.filter(item => item.isComplete);
    setisComplete(result);
  }, [todos]);

  return (
    <>
      {todos.length > 0 && (
        <Text style={styles.completed}>
          Some of the tasks have been completed {complete.length}/{todos.length}
        </Text>
      )}
      <View style={styles.container}>
        <List navigation={navigation} />
      </View>
    </>
  );
};

export default HomeScreen;
