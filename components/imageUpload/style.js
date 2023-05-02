import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  img: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 240,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    opacity: 1,
    borderWidth: 1,
    backgroundColor: '#55BCF6',
    padding: 10,
    width: 100,
    height: 50,
    textAlign: 'center',
    borderRadius: 10,
    borderColor: '#55BCF6',
  },
  removeImage: {
    position: 'absolute',
    borderRadius: 50,
    zIndex: 1,
    top: -17,
    right: -34,
    width: 50,
    height: 50,
  },
});

export default styles;
