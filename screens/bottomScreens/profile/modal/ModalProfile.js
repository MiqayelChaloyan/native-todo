import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
// import TextField from 'react-native-md-textinput';
import styles from './style';

const ModalProfile = ({ isVisible, closeRemoveModal }) => {
    const closeModal = (bool, type) => closeRemoveModal(bool, type);

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
                <View style={styles.modal}>
                    <View style={styles.textView}>
                        <TouchableOpacity
                            style={styles.touchableOpacityCancel}
                            onPress={() => closeModal(false, 'Cancel')}>
                            <Text style={styles.textCancel}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            left: 80,
                            borderWidth: 2,
                            width: 205,
                            height: 204,
                            borderRadius: 100,
                            marginBottom: 90,
                        }}><View style={{
                            borderWidth: 2,
                            width: 54,
                            height: 54,
                            position: 'absolute',
                            backgroundColor: '#F4F4F4',
                            bottom: 2,
                            right: -10,
                            borderRadius: 100,
                            marginBottom: 10,
                        }}><Text style={{
                            position: 'absolute',
                            fontSize: 50, bottom: -10, right: 9
                        }}>{'+'}</Text></View></View>
                    <View style={{ flex: 1, }}>
                        <TextInput
                            style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="useless placeholder"
                            variant="standard"
                        />

                    </View>
                    <View style={{ flex: 1, marginTop: 250, flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity
                            style={{ backgroundColor: '#263775', width: 370, height: 48, borderRadius: 8 }}
                            onPress={() => closeModal(false, 'Yes')}>
                            <Text style={{ textAlign: 'center', padding: 5, fontSize: 24, color: '#fff' }}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};


export default ModalProfile;