import { View, TextInput } from 'react-native';
import styles from './style';

const MyInput = ({ handleChange, item }) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={newText => handleChange(newText)}
                value={item}
                placeholder="Write a task"
                keyboardType="default"
            />
        </View>
    );
};

export default MyInput;