import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 190,
    height: 40,
    backgroundColor: '#FFFFFF',
    padding: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  checkContain: {
    width: 20,
    height: 20,
    backgroundColor: 'rgba(85, 188, 246, 0.4)',
    borderRadius: 5,
  },
  text: {
    width: 150,
    left: 15,
    color: '#1A1A1A',
    textDecorationColor: '#000',
    textDecorationStyle: 'solid',
  },
  elipse: {
    backgroundColor: '#FFFFFF',
    width: 15,
    height: 15,
    borderRadius: 5,
    borderColor: '#55BCF6',
    borderWidth: 2,
    left: 80,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 65,
    width: 300,
    paddingVertical: 4,
    paddingHorizontal: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 17,
  },
  elevation: {
    shadowColor: 'rgba(0, 0, 0, 1)',
    elevation: 7,
  },
});

export default styles;
