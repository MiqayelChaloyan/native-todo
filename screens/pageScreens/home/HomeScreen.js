import * as React from 'react';
import {View, Text, Button} from 'react-native';
import List from '../../../components/list/List';

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
      }}>
      <List navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
