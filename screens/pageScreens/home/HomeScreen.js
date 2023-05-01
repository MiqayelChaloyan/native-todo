import * as React from 'react';
import { View, Text, Button } from 'react-native';
import List from '../../../components/list/List';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <List navigation={navigation} />
            {/* <Button title="button" onPress={() => navigation.navigate("EditScreen")} /> */}
        </View>
    );
}

export default HomeScreen;