import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width - 25;
const HEIGHT = 400;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 240,
  },
  modal: {
    height: HEIGHT,
    width: WIDTH,
    paddingTop: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
  },
  textView: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#55BCF6',
    opacity: 1,
    borderWidth: 1,
    padding: 10,
    width: 280,
    height: 50,
    textAlign: 'center',
    borderRadius: 10,
    borderColor: '#55BCF6',
  },
  buttonsView: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 80,
    top: 50,
  },
  touchableOpacity: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    bottom: 160,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    height: 60,
    width: 280,
    marginTop: 40,
    marginBottom: 25,
  },
  elevation: {
    shadowColor: 'rgba(0, 0, 0, 1)',
    elevation: 7,
  },
});

export default styles;
