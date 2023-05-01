import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import RemoveImage from '../../../assects/images/photo_2023-05-02_00-39-16.jpg';
import BtnImage from '../../../assects/images/photo_2023-05-02_00-39-31.jpg';

const RemoveTask = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Text style={styles.text}>If you want to delete any of the tasks, click on the task.</Text>
                <Image
                    style={styles.btn}
                    source={BtnImage}
                />
                <Text style={styles.text}>A window will open where you can click yes and the task you specified will be deleted, if you cancel you will just go to the home page.</Text>
                <Image
                    style={styles.remove}
                    source={RemoveImage}
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
        top: 50
    },
    remove: {
        width: 250,
        height: 500,
        marginBottom: 50
    },
});

export default RemoveTask;