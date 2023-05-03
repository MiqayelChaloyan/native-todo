import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import GlobalContext from '../../context/GlobalContext';
import PencilIcon from './icons/Pencil.svg';
import RemoveIcon from './icons/Remove.svg';
import CheckIcon from './icons/Check.svg';
import RemoveTask from '../modal/RemoveTask';
import styles from './style';

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

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#55BCF6',
        borderRadius: 10,
        padding: 10,
        margin: 3,
      }}>
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
              <View style={styles.checkContain}>
                {item.isComplete && (
                  <CheckIcon width={17} height={23} fill="gray" zIndex={1} />
                )}
              </View>
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
              right: 12,
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
        <View style={{marginBottom: 1, right: 2}}>
          <View style={{bottom: 3}}>
            <Text
              style={styles.removeImage}
              onPress={() => {
                const newTodos = todos.map(item =>
                  item.id === id
                    ? {
                        ...item,
                        imgUrl: null,
                      }
                    : {
                        ...item,
                        imgUrl: item.imgUrl,
                      },
                );
                setTodos(newTodos);
              }}>
              <RemoveIcon width={20} height={20} fill="#55BCF6" zIndex={1} />
            </Text>
            <Image
              source={{uri: item.imgUrl}}
              style={{
                width: 327,
                height: 190,
                borderRadius: 10,
                position: 'relative',
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Task;
