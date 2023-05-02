import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import GlobalContext from '../../context/GlobalContext';

import PencilIcon from './Pencil.svg';
import styles from './style';
import RemoveTask from '../modal/RemoveTask';

const Task = ({id, title, removeTodo, navigation, item}) => {
  const [isRemoveTaskModalVisible, setisRemoveTaskModalVisible] =
    useState(false);
  const {todos, setTodos} = useContext(GlobalContext);

  const closeRemoveModal = (bool, type) => {
    if (type === 'Yes') {
      setisRemoveTaskModalVisible(bool);
      removeTodo(id);
    } else {
      setisRemoveTaskModalVisible(bool);
    }
  };

  console.log(item);

  return (
    <>
      <View>
        <RemoveTask
          isModalVisible={isRemoveTaskModalVisible}
          closeRemoveModal={closeRemoveModal}
          title={title}
        />
      </View>
      <TouchableOpacity
        delayLongPress={500}
        onLongPress={() => setisRemoveTaskModalVisible(true)}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
        <View
          style={[
            styles.elevation,
            styles.card,
            {
              marginBottom: 25,
            },
          ]}>
          <View style={[styles.container]}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.checkContain}></View>
              <Text
                style={[
                  styles.text,
                  {
                    textDecorationLine: item.isComplete
                      ? 'line-through'
                      : 'none',
                  },
                ]}>
                {title}
              </Text>
            </View>
            <View style={styles.elipse}>
              <Text
                onPress={() => {
                  const newTodos = todos.map(item =>
                    item.id === id
                      ? {
                          ...item,
                          isComplete: !item.isComplete,
                        }
                      : {
                          ...item,
                          isComplete: item.isComplete,
                        },
                  );
                  setTodos(newTodos);
                }}></Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              marginTop: 19,
              fontSize: 25,
            }}
            onPress={() =>
              navigation.navigate('PageNavigator', {
                screen: 'EditScreen',
                params: {item, id},
              })
            }>
            <PencilIcon width={30} height={30} fill="#55BCF6" />
          </Text>
        </View>
      </TouchableOpacity>
      {item.imgUrl && (
        <View style={{left: 10, marginBottom: 20}}>
          <View style={{marginTop: 90}}>
            <Image
              source={{uri: item.imgUrl}}
              style={{width: 300, height: 150, borderRadius: 7}}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default Task;
