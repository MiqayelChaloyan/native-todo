import {useContext, useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import List from '../../../components/list/List';
import GlobalContext from '../../../context/GlobalContext';

const HomeScreen = ({navigation}) => {
  const {todos} = useContext(GlobalContext);
  const [complete, setisComplete] = useState(0);

  useEffect(() => {
    const result = todos.filter(item => item.isComplete);
    setisComplete(result);
  }, [todos]);

  return (
    <>
      <Text style={{textAlign: 'center', margin: 15, fontSize: 14}}>
        Some of the tasks have been completed {complete.length}/{todos.length}
      </Text>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 25,
        }}>
        <List navigation={navigation} />
      </View>
    </>
  );
};

export default HomeScreen;
