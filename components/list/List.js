import { FlatList, SafeAreaView, ScrollView, Text } from 'react-native';
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';
import Task from '../task/Task';
import styles from './style';

const List = ({ navigation }) => {
    const { todos, removeTodo } = useContext(GlobalContext);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <FlatList
                    data={todos}
                    renderItem={({ item }) => (
                        <Task
                            id={item.id}
                            title={item.title}
                            removeTodo={removeTodo}
                            navigation={navigation}
                            item={item}
                        />
                    )}
                    keyExtractor={item => item.id}
                    inverted={true}
                    style={{
                        flexGrow: 0,
                        marginBottom: 150,
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default List;