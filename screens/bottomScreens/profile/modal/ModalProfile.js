import {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import Modal from 'react-native-modal';
// form and validation
import {Formik, useFormik} from 'formik';
import validationSchema from './validate/schema';
import styles from './style';
import GlobalContext from '../../../../context/GlobalContext';

const ModalProfile = ({isVisible, closeRemoveModal}) => {
  const {createUser} = useContext(GlobalContext);

  const [state, setState] = useState(null);
  const {
    values,
    handleChange,
    errors,
    setFieldTouched,
    touched,
    isValid,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: '',
      userName: '',
      phoneNumber: '',
      email: '',
    },
    validationSchema,
    onSubmit: data => {
      setState(data);
    },
  });

  const closeModal = (bool, type) => closeRemoveModal(bool, type);

  const handleSave = () => {
    if (state) {
      createUser(state);
      closeModal(false, 'Cancel');
    }
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
        <View style={styles.modal}>
          <View style={styles.textView}>
            <TouchableOpacity
              style={styles.touchableOpacityCancel}
              onPress={() => closeModal(false, 'Cancel')}>
              <Text style={styles.textCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../../assects/images/profile.jpg')}
              style={{
                width: 202,
                height: 202,
                borderRadius: 100,
                position: 'absolute',
                right: 0,
                bottom: -1,
              }}
            />
            <View style={styles.icon}>
              <Text style={styles.iconText}>{'+'}</Text>
            </View>
          </View>
          <Formik>
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                value={values.name}
                variant="standard"
                onChangeText={handleChange('name')}
                placeholder="Name"
                onBlur={() => setFieldTouched('name')}
                secureTextEntry={false}
              />
              {touched.name && errors.name && (
                <Text style={styles.inputError}>{errors.name}</Text>
              )}
              <TextInput
                style={styles.input}
                value={values.userName}
                variant="standard"
                onChangeText={handleChange('userName')}
                placeholder="user name"
                onBlur={() => setFieldTouched('userName')}
                secureTextEntry={false}
              />
              {touched.userName && errors.userName && (
                <Text style={styles.inputError}>{errors.userName}</Text>
              )}
              <TextInput
                style={styles.input}
                value={values.phoneNumber}
                variant="standard"
                onChangeText={handleChange('phoneNumber')}
                placeholder="phone number"
                onBlur={() => setFieldTouched('phoneNumber')}
                secureTextEntry={false}
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <Text style={styles.inputError}>{errors.phoneNumber}</Text>
              )}
              <TextInput
                style={styles.input}
                value={values.email}
                variant="standard"
                onChangeText={handleChange('email')}
                placeholder="email"
                onBlur={() => setFieldTouched('email')}
                secureTextEntry={false}
              />
              {touched.email && errors.email && (
                <Text style={styles.inputError}>{errors.email}</Text>
              )}
            </View>
          </Formik>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.touchableOpacitySave}
              disabled={!isValid}
              onPress={() => {
                handleSave(), handleSubmit();
              }}>
              <Text style={styles.saveBtnText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalProfile;
