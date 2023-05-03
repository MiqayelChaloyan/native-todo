import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ModalProfile from './modal/ModalProfile';

const Profile = () => {
  const [isVisible, setisVisible] = useState(false);

  const closeRemoveModal = (bool, type) => {
    if (type === 'Yes') {
      setisVisible(bool);
    } else {
      setisVisible(bool);
    }
  };

  return (
    <>
      <ModalProfile isVisible={isVisible}
        closeRemoveModal={closeRemoveModal} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ bottom: 100 }}>
          <View
            style={{
              left: 80,
              borderWidth: 2,
              width: 205,
              height: 204,
              borderRadius: 100,
              marginBottom: 10,
            }}></View>
          <Text style={{ textAlign: 'center', marginBottom: 10, color: 'black', fontWeight: 'bold', fontSize: 25 }}>
            Alex Marshal
          </Text>
          <Text style={{ textAlign: 'center', marginBottom: 50 }}>
            @alexmarshal
          </Text>
          <TouchableOpacity onPress={() => setisVisible(true)} style={{ backgroundColor: '#263775', width: 370, height: 48, borderRadius: 8 }}
          >
            <Text style={{ textAlign: 'center', padding: 5, fontSize: 24, color: '#fff' }}>Edit</Text>
          </TouchableOpacity>

        </View>
      </View>
    </>
  );
};

export default Profile;
