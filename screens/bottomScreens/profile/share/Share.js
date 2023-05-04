import {Text} from 'react-native';
import Share from 'react-native-share';
// styles
import styles from './style';

const ShareScreen = () => {
  const share = async () => {
    const options = {
      message: 'This is an example of spreading anything.',
      url: 'https://facebook.com/',
      email: 'miqochaloyan@gmail.com',
      subject: 'This is an example share.',
    };
    try {
      const result = await Share.open(options);
      console.log(result);
    } catch (err) {
      err && console.log(err);
    }
  };

  return (
    <Text style={styles.container} onPress={share}>
      Share
    </Text>
  );
};

export default ShareScreen;
