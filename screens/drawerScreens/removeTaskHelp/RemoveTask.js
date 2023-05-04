import * as React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
// images screens
import RemoveImage from '../../../assects/images/photo_2023-05-02_00-39-16.jpg';
import BtnImage from '../../../assects/images/photo_2023-05-02_00-39-31.jpg';
// styles
import styles from './style';

const RemoveTask = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>
          If you want to delete any of the tasks, click on the task.
        </Text>
        <Image style={styles.btn} source={BtnImage} />
        <Text style={styles.text}>
          A window will open where you can click yes and the task you specified
          will be deleted, if you cancel you will just go to the home page.
        </Text>
        <Image style={styles.remove} source={RemoveImage} />
      </View>
    </ScrollView>
  );
};

export default RemoveTask;
