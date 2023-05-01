import AddScreen from "../screens/pageScreens/add/AddScreen";
import EditScreen from "../screens/pageScreens/edit/EditScreen";
import HomeScreen from "../screens/pageScreens/home/HomeScreen";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const PageNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="List" >
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="List"
                component={HomeScreen}
            />
            <Stack.Screen name="EditScreen" component={EditScreen} />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="Add"
                component={AddScreen}
            />
        </Stack.Navigator>
    );
}

export default PageNavigator;