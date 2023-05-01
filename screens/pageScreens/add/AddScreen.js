import GlobalContext from '../../../context/GlobalContext'
import React, { useContext, useEffect } from 'react';

import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MyInput from '../../../components/myInput/MyInput'
import styles from './style';

const AddScreen = ({ navigation, route }) => {
    const { addTodo } = useContext(GlobalContext);
    // const {item, id} = route?.params;

    const [text, setNewText] = useState('');

    useEffect(() => setNewText(''), [addTodo]);

    const handleChange = newText => setNewText(newText);

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.modal}>
                    <View style={{ top: 5, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        {text.length > 0 && (
                            <Text style={styles.title}>Want to add to your to-do list ?</Text>
                        )}
                        <Text>{text}</Text>
                    </View>
                    <View style={styles.textView}>
                        <View style={[styles.elevation, styles.card]}>
                            <View>
                                <MyInput handleChange={handleChange} item={text} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonsView}>
                        <TouchableOpacity style={styles.touchableOpacity}>
                            <Text
                                style={styles.text}
                                onPress={() => {
                                    addTodo(text);
                                    return navigation.navigate('Home');
                                }}>
                                Add
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default AddScreen;