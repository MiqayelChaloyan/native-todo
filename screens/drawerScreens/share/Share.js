import {Text} from 'react-native';
import Share from 'react-native-share';

const ShareScreen = () => {
  const share = async () => {
    const options = {
      message: 'This is an example of spreading anything.',
      ul: 'https://ru-ru.facebook.com/',
      email: 'miqochaloyan@gmail.com',
      subject: 'This is an example share.',
      recipient: '4545785',
    };
    try {
      const result = await Share.open(options);
      console.log(result);
    } catch (err) {
      err && console.log(err);
    }
  };
  return (
    <Text
      style={{
        textAlign: 'left',
        padding: 5,
        fontSize: 17,
        color: 'black',
        left: 15,
      }}
      onPress={share}>
      Share
    </Text>
  );
};

export default ShareScreen;
