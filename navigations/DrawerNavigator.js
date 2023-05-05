// screens in drawer
import Chat from '../screens/drawerScreens/removeTaskHelp/RemoveTask';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/pageScreens/home/HomeScreen';
import RemoveTask from '../screens/drawerScreens/removeTaskHelp/RemoveTask';
import AddTask from '../screens/drawerScreens/addTaskHelp/AddTask';
import EditTask from '../screens/drawerScreens/editTaskHelp/EditTask';
import VideoPlayeer from '../screens/drawerScreens/videoPlayer/VideoPlayer';
import ReanimatedCarousel from '../screens/drawerScreens/carousel/Carousel';
import TopTabs from './TopTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Remove" component={RemoveTask} />
      <Drawer.Screen name="Add" component={AddTask} />
      <Drawer.Screen name="Edit" component={EditTask} />
      <Drawer.Screen name="Video" component={VideoPlayeer} />
      <Drawer.Screen name="Carousel" component={ReanimatedCarousel} />
      <Drawer.Screen name="Tabs" component={TopTabs} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
