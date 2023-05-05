import {Text} from 'react-native';
import Share from 'react-native-share';
// styles
import styles from './style';

const ShareScreen = () => {
  const share = async () => {
    const shareOptions = {
      message: 'This is an example of spreading anything.',
      url: 'https://facebook.com/',
      email: 'miqochaloyan@gmail.com',
      social: Share.Social.EMAIL,
      subject: 'This is an example share.',
      backgroundBottomColor: '#fefefe',
      backgroundTopColor: '#906df4',
    };

    await Share.shareSingle(shareOptions)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });

    // const options = {
    //   message: 'This is an example of spreading anything.',
    //   url: 'https://facebook.com/',
    //   email: 'miqochaloyan@gmail.com',
    //   subject: 'This is an example share.',
    // };

    // Share.open(options)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     err && console.log(err);
    //   });
  };

  return (
    <Text style={styles.container} onPress={share}>
      Share
    </Text>
  );
};

export default ShareScreen;
