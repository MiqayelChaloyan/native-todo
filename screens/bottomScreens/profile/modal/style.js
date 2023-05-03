import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width - 5;
const HEIGHT = 900;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: HEIGHT,
    width: WIDTH,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textView: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    right: 120,
    top: 25,
  },
  input: {
    width: 370,
    height: 50,
    margin: 5,
    borderWidth: 1,
    padding: 10,
  },
  imageContainer: {
    left: 80,
    borderWidth: 2,
    width: 205,
    height: 204,
    borderRadius: 100,
    marginBottom: 50,
    backgroundColor: '#F4F4F4',
    bottom: 20,
  },
  icon: {
    borderWidth: 2,
    width: 54,
    height: 54,
    position: 'absolute',
    backgroundColor: '#F4F4F4',
    bottom: 2,
    right: -10,
    borderRadius: 100,
    marginBottom: 10,
  },
  textCancel: {
    margin: 5,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
    color: '#C93131',
    opacity: 0.8,
  },
  iconText: {
    position: 'absolute',
    fontSize: 50,
    bottom: -10,
    right: 9,
  },
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  inputError: {
    fontSize: 12,
    color: '#FF0D10',
  },
  buttonContainer: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  touchableOpacityCancel: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    right: 15,
    top: 50,
  },
  touchableOpacitySave: {
    backgroundColor: '#263775',
    width: 370,
    height: 48,
    borderRadius: 8,
  },
  saveBtnText: {
    textAlign: 'center',
    padding: 5,
    fontSize: 24,
    color: '#fff',
  },
});

export default styles;
