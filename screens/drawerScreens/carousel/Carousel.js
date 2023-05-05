import {View, Text, Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const list = [
  {
    id: 1,
    title: 'page 1',
    background: '#32a852',
  },
  {
    id: 2,
    title: 'page 2',
    background: '#45ff77',
  },
  {
    id: 3,
    title: 'page 3',
    background: '#2f77a3',
  },
  {
    id: 4,
    title: 'page 4',
    background: '#72c8fc',
  },
];

const ReanimatedCarousel = () => {
  const width = Dimensions.get('window').width;
  return (
    <View style={{flex: 1}}>
      <Carousel
        loop
        width={width}
        height={width - 50}
        autoPlay={true}
        data={list}
        scrollAnimationDuration={2500}
        renderItem={({item}) => (
          <View
            style={[
              {
                flex: 1,
                borderWidth: 1,
                justifyContent: 'center',
                marginTop: 50,
              },
              {backgroundColor: item.background},
            ]}>
            <Text style={{textAlign: 'center', fontSize: 30}}>
              {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default ReanimatedCarousel;
