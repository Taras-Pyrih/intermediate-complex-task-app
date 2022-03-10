import { textPattern, emailPattern, telPattern, numberPattern } from '../../consts/consts.jsx';

export const validateRegistration = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (!textPattern.test(values.firstName)) {
    errors.firstName = 'Wrong firstName!';
  }

  if (!values.secondName) {
    errors.secondName = 'Required';
  } else if (!textPattern.test(values.secondName)) {
    errors.secondName = 'Wrong secondName!';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!emailPattern.test(values.email)) {
    errors.email = 'Wrong email!';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Required';
  } else if (!telPattern.test(values.phoneNumber)) {
    errors.phoneNumber = 'Wrong phoneNumber!';
  }

  if (!values.personalId) {
    errors.personalId = 'Required';
  } else if (!numberPattern.test(values.personalId)) {
    errors.personalId = 'Wrong personalId!';
  }

  if (!values.description) {
    errors.description = 'Required';
  }
  
  return errors;
};