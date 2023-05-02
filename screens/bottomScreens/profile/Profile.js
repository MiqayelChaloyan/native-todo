import * as React from 'react';
import {View, Text, Button} from 'react-native';

const Profile = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{bottom: 100}}>
        <View
          style={{
            borderWidth: 2,
            width: 150,
            height: 150,
            borderRadius: 100,
            marginBottom: 10,
          }}></View>
        <Text style={{textAlign: 'center', marginBottom: 10}}>
          Alex Marshal
        </Text>
        <Text style={{textAlign: 'center', marginBottom: 50}}>
          @alexmarshal
        </Text>
        <Button
          //   onPress={onPressLearnMore}
          title="Learn More"
          color="#263775"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
};

export default Profile;
