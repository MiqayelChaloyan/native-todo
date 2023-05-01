import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import EditImage from '../../../assects/images/photo_2023-05-02_00-39-28.jpg';
import EditPageImage from '../../../assects/images/photo_2023-05-02_00-39-24.jpg';


const EditTask = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Text style={styles.text}>To modify an already existing task, click on the button in the area indicated in the picture.</Text>
                <Image
                    style={styles.edit}
                    source={EditImage}
                />
                <Text style={styles.text}>After changing the task, press the edit button, otherwise cancel.</Text>
                <Image
                    style={styles.btn}
                    source={EditPageImage}
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
        width: 250,
        height: 300,
        marginBottom: 50
    },
    edit: {
        width: 250,
        height: 400,
        marginBottom: 50
    },
});



export default EditTask;