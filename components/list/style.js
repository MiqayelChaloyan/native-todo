import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    height: StatusBar.currentHeight + 650,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default styles;
