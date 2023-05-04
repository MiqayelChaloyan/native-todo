import {useContext, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';

import Modal from 'react-native-modal';
import GlobalContext from '../../../../../context/GlobalContext';
import styles from './style';

const countriesData = [
  {key: 1, value: 'Austria'},
  {key: 2, value: 'Armenia'},
  {key: 3, value: 'Albania'},
  {key: 4, value: 'Belgium'},
  {key: 5, value: 'Brazil'},
  {key: 6, value: 'Egypt'},
  {key: 7, value: 'China'},
  {key: 8, value: 'Canada'},
  {key: 9, value: 'Georgia'},
  {key: 10, value: 'Russia'},
];

const ModalDropdown = ({isVisible, closeRemoveModalDropdown}) => {
  const {setCountry} = useContext(GlobalContext);
  const [selected, setSelected] = useState('Austria');

  const closeModal = (bool, type) => closeRemoveModalDropdown(bool, type);

  const handleSubmit = () => {
    setCountry(selected);
    closeModal(false, 'Cancel');
  };

  return (
    <Modal
      isVisible={isVisible}
      coverScreen={true}
      transparent={true}
      backdropColor="#fff"
      backdropOpacity={0.2}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={500}
      swipeDirection={['down', 'up', 'right', 'left']}
      onSwipeComplete={() => closeModal(false, 'Cancel')}
      hideModal={() => closeModal(false, 'Cancel')}>
      <View style={styles.container}>
        <View
          style={{
            height: 400,
            width: 370,
            paddingTop: 10,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              position: 'relative',
              right: 120,
              bottom: 50,
            }}>
            <TouchableOpacity
              style={styles.touchableOpacityCancel}
              onPress={() => closeModal(false, 'Cancel')}>
              <Text style={styles.textCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>

          <View style={{width: 200, marginLeft: 85}}>
            <SelectList
              setSelected={val => setSelected(val)}
              data={countriesData}
              save="value"
              defaultOption={{key: '1', value: selected}}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={{
                backgroundColor: '#263775',
                width: 200,
                height: 48,
                borderRadius: 8,
              }}
              onPress={handleSubmit}>
              <Text style={styles.saveBtnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDropdown;
