import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/bottomScreens/profile/Profile';
import DrawerNavigator from './DrawerNavigator';
import AddScreen from '../screens/pageScreens/add/AddScreen';
import PlusIcon from './icons/Plus.svg';
import HomeIcon from './icons/Home.svg';
import ProfileIcon from './icons/Profile.svg';
import {Keyboard, StyleSheet, View} from 'react-native';
import {useEffect, useState} from 'react';

const Tab = createBottomTabNavigator();

const BootomTabNavigator = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarItemStyle: {
          paddingTop: 8,
        },
      }}
      tabBarOptions={{
        activeTintColor: '#55BCF6',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({tabInfo, focused}) => (
            <HomeIcon
              width={28}
              height={28}
              fill={focused ? '#55BCF6' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({tabInfo, focused}) => (
            <View
              style={[
                styles.container,
                {display: keyboardStatus ? 'none' : 'flex'},
              ]}>
              <PlusIcon
                width={30}
                height={50}
                style={styles.elevation}
                fill={focused ? '#55BCF6' : 'gray'}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({tabInfo, focused}) => (
            <ProfileIcon
              width={28}
              height={28}
              fill={focused ? '#55BCF6' : 'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 50,
    bottom: 24,
    shadowColor: 'rgba(0, 0, 0, 1)',
    elevation: 7,
    width: 70,
    height: 70,
    zIndex: 12,
  },
  elevation: {
    backgroundColor: 'white',
    borderRadius: 50,
    left: 20,
    top: 10,
    zIndex: 12,
  },
});

export default BootomTabNavigator;
