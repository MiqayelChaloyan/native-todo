import {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
// modals
import ModalProfile from './modal/registration/ModalProfile';
import ModalDropdown from './modal/dropdown/ModalDropdown';
// icons
import GroupIcon from './icons/Group.svg';
import FriendIcon from './icons/Friend.svg';
import SettingIcon from './icons/Setting.svg';
import ShareIcon from './icons/Share.svg';
import AboutUsIcon from './icons/AboutUs.svg';
import SupportIcon from './icons/Support.svg';
import PhoneIcon from './icons/Phone.svg';
// context
import GlobalContext from '../../../context/GlobalContext';
// components
import ShareScreen from './share/Share';

const supportedURL = 'https://facebook.com';

const Profile = () => {
  const [isVisible, setisVisible] = useState(false);
  const [isVisibleDropdown, setisVisibleDropdown] = useState(false);

  const {user, userImageUrl} = useContext(GlobalContext);

  const closeRemoveModal = (bool, type) => {
    if (type === 'Yes') {
      setisVisible(bool);
    } else {
      setisVisible(bool);
    }
  };

  const closeRemoveModalDropdown = (bool, type) => {
    setisVisibleDropdown(bool);
  };

  const handlePress = () => {
    const supported = Linking.canOpenURL(supportedURL);

    if (supported) {
      Linking.openURL(supportedURL);
    } else {
      Alert.alert(`Don't know how to open this URL: ${supportedURL}`);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
      <ScrollView
        style={{
          marginHorizontal: 20,
          marginBottom: 20,
        }}>
        <ModalProfile
          isVisible={isVisible}
          closeRemoveModal={closeRemoveModal}
        />
        <ModalDropdown
          isVisible={isVisibleDropdown}
          closeRemoveModalDropdown={closeRemoveModalDropdown}
        />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{top: 15}}>
            <View
              style={{
                left: 80,
                borderWidth: 1,
                width: 205,
                height: 204,
                borderRadius: 100,
                marginBottom: user ? 10 : 100,
                bottom: 5,
              }}>
              {userImageUrl ? (
                <Image
                  source={{uri: userImageUrl}}
                  style={{
                    width: 202,
                    height: 202,
                    borderRadius: 100,
                  }}
                />
              ) : (
                <Image
                  source={require('../../../assects/images/profile.jpg')}
                  style={{
                    width: 202,
                    height: 202,
                    borderRadius: 100,
                  }}
                />
              )}
            </View>
            {user && (
              <>
                <Text
                  style={{
                    textAlign: 'center',
                    marginBottom: 10,
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 25,
                  }}>
                  {user.name && user.name}
                </Text>
                <Text style={{textAlign: 'center', marginBottom: 20}}>
                  {user.userName}
                </Text>
                <Text style={{textAlign: 'center'}}>
                  {user.country && user.country}
                </Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    Linking.openURL(`tel:${user.phoneNumber}`);
                  }}>
                  {user.phoneNumber && (
                    <Text
                      style={{
                        textAlign: 'center',
                        padding: 7,
                        fontSize: 15,
                        color: 'black',
                      }}>
                      <PhoneIcon width={20} height={20} fill="black" />
                    </Text>
                  )}
                  <Text
                    style={{
                      textAlign: 'center',
                      marginBottom: 10,
                      color: 'black',
                      fontWeight: 300,
                      fontSize: 20,
                    }}>
                    {user.phoneNumber && user.phoneNumber}
                  </Text>
                </TouchableOpacity>
              </>
            )}
            <TouchableOpacity
              onPress={() => setisVisible(true)}
              style={{
                backgroundColor: '#263775',
                width: 370,
                height: 48,
                borderRadius: 8,
                marginBottom: 5,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  padding: 5,
                  fontSize: 24,
                  color: '#fff',
                }}>
                Edit
              </Text>
            </TouchableOpacity>
            <View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    margin: 4,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      padding: 7,
                      fontSize: 15,
                      color: 'black',
                    }}>
                    <SettingIcon width={20} height={20} fill="black" />
                  </Text>
                  <TouchableOpacity
                    style={{
                      width: 325,
                      height: 40,
                      borderRadius: 8,
                    }}
                    onPress={() => setisVisibleDropdown(true)}>
                    <Text
                      style={{
                        textAlign: 'left',
                        padding: 5,
                        fontSize: 17,
                        color: 'black',
                        left: 15,
                      }}>
                      Setting
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    margin: 4,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      padding: 7,
                      fontSize: 15,
                      color: 'black',
                    }}>
                    <FriendIcon width={20} height={20} fill="black" />
                  </Text>
                  <TouchableOpacity
                    style={{
                      // backgroundColor: '#263775',
                      width: 325,
                      height: 40,
                      borderRadius: 8,
                    }}>
                    <Text
                      style={{
                        textAlign: 'left',
                        padding: 5,
                        fontSize: 17,
                        color: 'black',
                        left: 15,
                      }}>
                      Friend
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    margin: 4,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      padding: 7,
                      fontSize: 15,
                      color: 'black',
                    }}>
                    <GroupIcon width={20} height={20} fill="black" />
                  </Text>
                  <TouchableOpacity
                    style={{
                      width: 325,
                      height: 40,
                      borderRadius: 8,
                    }}>
                    <Text
                      style={{
                        textAlign: 'left',
                        padding: 5,
                        fontSize: 17,
                        color: 'black',
                        left: 15,
                      }}>
                      New Group
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    margin: 4,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      padding: 7,
                      fontSize: 15,
                      color: 'black',
                    }}>
                    <SupportIcon width={20} height={20} fill="black" />
                  </Text>
                  <TouchableOpacity
                    style={{
                      width: 325,
                      height: 40,
                      borderRadius: 8,
                    }}
                    onPress={handlePress}>
                    <Text
                      style={{
                        textAlign: 'left',
                        padding: 5,
                        fontSize: 17,
                        color: 'black',
                        left: 15,
                      }}>
                      Support
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    margin: 4,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      padding: 7,
                      fontSize: 15,
                      color: 'black',
                    }}>
                    <ShareIcon width={20} height={20} fill="black" />
                  </Text>
                  <TouchableOpacity
                    style={{
                      width: 325,
                      height: 40,
                      borderRadius: 8,
                    }}>
                    <Text
                      style={{
                        textAlign: 'left',
                        padding: 5,
                        fontSize: 17,
                        color: 'black',
                        left: 15,
                      }}>
                      <ShareScreen />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    margin: 4,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      padding: 7,
                      fontSize: 15,
                      color: 'black',
                    }}>
                    <AboutUsIcon width={20} height={20} fill="black" />
                  </Text>
                  <TouchableOpacity
                    style={{
                      width: 325,
                      height: 40,
                      borderRadius: 8,
                    }}>
                    <Text
                      style={{
                        textAlign: 'left',
                        padding: 5,
                        fontSize: 17,
                        color: 'black',
                        left: 15,
                      }}>
                      Abot us
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
