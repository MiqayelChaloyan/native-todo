import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
// import RemoveIcon from './Remove.svg';
import styles from './style';

const RemoveTask = ({ isModalVisible, closeRemoveModal, title }) => {
    const closeModal = (bool, type) => closeRemoveModal(bool, type);

    return (
        <Modal
            isVisible={isModalVisible}
            coverScreen={true}
            transparent={true}
            backdropColor="red"
            backdropOpacity={0.2}
            backdropTransitionInTiming={500}
            backdropTransitionOutTiming={500}
            swipeDirection={['down', 'up', 'right', 'left']}
            onSwipeComplete={() => closeModal(false, 'Cancel')}
            hideModal={() => closeModal(false, 'Cancel')}>
            <View style={styles.container}>
                <View style={styles.modal}>
                    <View style={styles.textView}>
                        <Text style={styles.titleText}>
                            Do you want to remove it from your task list ?
                        </Text>
                        <View style={styles.compliteContain}>
                            <Text
                                style={{
                                    color: 'black',
                                    fontSize: 24,
                                    bottom: 4,
                                    right: 20,
                                }}>
                                {/* <RemoveIcon opacity={0.2} width={40} height={40} fill="red" /> */}
                            </Text>
                            <Text style={styles.item}>{title}</Text>
                        </View>
                    </View>
                    <View style={styles.buttonsView}>
                        <TouchableOpacity
                            style={styles.touchableOpacity}
                            onPress={() => closeModal(false, 'Yes')}>
                            <Text style={styles.text}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.touchableOpacity}
                            onPress={() => closeModal(false, 'Cancel')}>
                            <Text style={styles.text}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default RemoveTask;