import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Tab1 from '../screens/topScreens/tab1/Tab1';
import Tab2 from '../screens/topScreens/tab2/Tab2';

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab 1" component={Tab1} />
      <Tab.Screen name="Tab 2" component={Tab2} />
    </Tab.Navigator>
  );
}

export default TopTabs;
