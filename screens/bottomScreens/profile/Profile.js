import {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import ModalProfile from './modal/ModalProfile';

import GroupIcon from './icons/Group.svg';
import FriendIcon from './icons/Friend.svg';
import GlobalContext from '../../../context/GlobalContext';

const Profile = () => {
  const [isVisible, setisVisible] = useState(false);
  const {user} = useContext(GlobalContext);

  const closeRemoveModal = (bool, type) => {
    if (type === 'Yes') {
      setisVisible(bool);
    } else {
      setisVisible(bool);
    }
  };

  console.log(user);
  return (
    <>
      <ModalProfile isVisible={isVisible} closeRemoveModal={closeRemoveModal} />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{top: 15}}>
          <View
            style={{
              left: 80,
              borderWidth: 1,
              width: 205,
              height: 204,
              borderRadius: 100,
              marginBottom: 10,
              bottom: 15,
            }}>
            <Image
              source={require('../../../assects/images/profile.jpg')}
              style={{
                width: 202,
                height: 202,
                borderRadius: 100,
              }}
            />
          </View>
          <Text
            style={{
              textAlign: 'center',
              marginBottom: 10,
              color: 'black',
              fontWeight: 'bold',
              fontSize: 25,
            }}>
            {user ? user.name : 'Alex Marshall'}
          </Text>
          <Text style={{textAlign: 'center', marginBottom: 20}}>
            {user ? user.userName : '@alex_marshall'}
          </Text>
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
                style={{flexDirection: 'row', alignItems: 'center', margin: 4}}>
                <Text
                  style={{
                    textAlign: 'center',
                    padding: 5,
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
                    Setting
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', margin: 4}}>
                <Text
                  style={{
                    padding: 5,
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
                style={{flexDirection: 'row', alignItems: 'center', margin: 4}}>
                <Text
                  style={{
                    padding: 5,
                  }}>
                  <GroupIcon width={20} height={20} fill="black" />
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
                    New Group
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', margin: 4}}>
                <Text
                  style={{
                    textAlign: 'center',
                    padding: 5,
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
                    Support
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', margin: 4}}>
                <Text
                  style={{
                    textAlign: 'center',
                    padding: 5,
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
                    Share
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', margin: 4}}>
                <Text
                  style={{
                    textAlign: 'center',
                    padding: 5,
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
                    Abot us
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Profile;
