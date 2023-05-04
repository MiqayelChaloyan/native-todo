import * as React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
// images screens
import AddImage from '../../../assects/images/photo_2023-05-02_00-39-31.jpg';
import AddPageImage from '../../../assects/images/photo_2023-05-02_00-39-21.jpg';
// styles
import styles from './style';

const AddTask = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>
          To add a new task, click in the area indicated in the image.
        </Text>
        <Image style={styles.add} source={AddImage} />
        <Text style={styles.text}>
          After which you will be taken to another page, write the task you want
          to add and click the add button.
        </Text>
        <Image style={styles.btn} source={AddPageImage} />
      </View>
    </ScrollView>
  );
};

export default AddTask;
