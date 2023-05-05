import {useState} from 'react';
import {View, Text} from 'react-native';
import Video from 'react-native-video';
import styles from './style';

const videoUrl =
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4';

const VideoPlayeer = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: videoUrl,
        }}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
        }}
        controls={true}
        // volume={100}
        // filterEnabled={true}
        // moted={true}
        repeat={false}
        // fullscreenOrientation={true}
      />
    </View>
  );
};

export default VideoPlayeer;
