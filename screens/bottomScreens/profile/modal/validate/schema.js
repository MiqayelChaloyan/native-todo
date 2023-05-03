import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter a valid  your name!'),
  userName: Yup.string().required('Please enter a valid user name!'),
  phoneNumber: Yup.number('Please enter a valid phone number')
    .min(4)
    // .max(10, 'Phone number should not excced 10 chars.')
    .required('Please enter a valid phone number'),
  email: Yup.string().email().required('Please enter a valid email!'),
});

export default validationSchema;
