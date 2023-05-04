import * as React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
// images screens
import EditImage from '../../../assects/images/photo_2023-05-02_00-39-28.jpg';
import EditPageImage from '../../../assects/images/photo_2023-05-02_00-39-24.jpg';
// styles
import styles from './style';

const EditTask = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>
          To modify an already existing task, click on the button in the area
          indicated in the picture.
        </Text>
        <Image style={styles.edit} source={EditImage} />
        <Text style={styles.text}>
          After changing the task, press the edit button, otherwise cancel.
        </Text>
        <Image style={styles.btn} source={EditPageImage} />
      </View>
    </ScrollView>
  );
};

export default EditTask;
