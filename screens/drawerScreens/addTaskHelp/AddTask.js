import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import AddImage from '../../../assects/images/photo_2023-05-02_00-39-31.jpg';
import AddPageImage from '../../../assects/images/photo_2023-05-02_00-39-21.jpg';


const AddTask = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Text style={styles.text}>To add a new task, click in the area indicated in the image.</Text>
                <Image
                    style={styles.add}
                    source={AddImage}
                />
                <Text style={styles.text}>After which you will be taken to another page, write the task you want to add and click the add button.</Text>
                <Image
                    style={styles.btn}
                    source={AddPageImage}
                />
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    text: {
        alignItems: 'center',
        width: 300,
        fontSize: 17,
        marginTop: 25,
        marginBottom: 25
    },
    btn: {
        width: 200,
        height: 300,
        top: 50
    },
    add: {
        width: 250,
        height: 510,
        marginBottom: 50
    },
});

export default AddTask;