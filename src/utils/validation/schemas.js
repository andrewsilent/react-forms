import * as yup from 'yup';

const NAME_SCHEMA = yup
  .string()
  .matches(/^[A-Z][a-z]{1,64}$/, 'Please enter valid data')
  .required('This field is required');

const EMAIL_SCHEMA = yup
  .string()
  .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, 'Please enter valid email')
  .required('Email is required');

const PASSWORD_SCHEMA = yup
  .string()
  .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[#?!@$ %^&*-]).{4,}$/, 'Easy password')
  .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{4,}$/, 'Medium password')
  .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Hard password')
  .required('Password is required');

const PASSWORD_CONFIRM_SCHEMA = yup
  .string()
  .oneOf([yup.ref('password'), null], 'Password is not matching')
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    'Still not valid'
  )
  .required('Repeat your password');

const CHECKBOX_SCHEME = yup.bool().oneOf([true, false], 'Is not required');

export const LOGIN_SHEMA = yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  checkbox: CHECKBOX_SCHEME,
});

export const SIGNUP_SHEMA = yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  displayName: NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  passwordConfirm: PASSWORD_CONFIRM_SCHEMA,
  picked: yup.string().required('Select one of options'),
  checkbox: CHECKBOX_SCHEME,
});
