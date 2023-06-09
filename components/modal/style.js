import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width - 25;
const HEIGHT = 300;

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
  },
  textView: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    margin: 5,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
    color: '#55BCF6',
    opacity: 0.8,
    borderBottomColor: '#55BCF6',
    borderBottomWidth: 0.5,
  },
  compliteContain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  text: {
    margin: 5,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
    color: '#55BCF6',
    opacity: 0.8,
  },
  item: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'left',
  },
  buttonsView: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 80,
  },
  touchableOpacity: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 50,
    height: 60,
    width: 280,
    marginRight: 15,
  },
  elevation: {
    shadowColor: 'rgba(0, 0, 0, 1)',
    elevation: 7,
  },
});

export default styles;
