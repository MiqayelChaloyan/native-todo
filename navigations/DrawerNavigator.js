// screens in drawer
import Chat from '../screens/drawerScreens/removeTaskHelp/RemoveTask';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/pageScreens/home/HomeScreen';
import RemoveTask from '../screens/drawerScreens/removeTaskHelp/RemoveTask';
import AddTask from '../screens/drawerScreens/addTaskHelp/AddTask';
import EditTask from '../screens/drawerScreens/editTaskHelp/EditTask';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Remove" component={RemoveTask} />
      <Drawer.Screen name="Add" component={AddTask} />
      <Drawer.Screen name="Edit" component={EditTask} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
