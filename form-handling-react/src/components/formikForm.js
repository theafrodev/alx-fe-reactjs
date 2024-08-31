import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Enter Username'),
  email: Yup.string().email('Invalid Email').required('Enter Email'),
  password: Yup.string().required('Enter Password'),
});

const FormikForm = () => {
  return React.createElement(
    Formik,
    {
      initialValues: { username: '', email: '', password: '' },
      validationSchema: validationSchema,
      onSubmit: (values, { resetForm }) => {
        console.log('Success:', values);
        resetForm();
      },
    },
    ({ isSubmitting }) =>
      React.createElement(
        Form,
        null,
        React.createElement(
          'div',
          null,
          React.createElement('label', { htmlFor: 'username' }, 'Username:'),
          React.createElement(Field, { type: 'text', name: 'username' }),
          React.createElement(ErrorMessage, {
            name: 'username',
            component: 'p',
            style: { color: 'red' },
          })
        ),
        React.createElement(
          'div',
          null,
          React.createElement('label', { htmlFor: 'email' }, 'Email:'),
          React.createElement(Field, { type: 'email', name: 'email' }),
          React.createElement(ErrorMessage, {
            name: 'email',
            component: 'p',
            style: { color: 'red' },
          })
        ),
        React.createElement(
          'div',
          null,
          React.createElement('label', { htmlFor: 'password' }, 'Password:'),
          React.createElement(Field, { type: 'password', name: 'password' }),
          React.createElement(ErrorMessage, {
            name: 'password',
            component: 'p',
            style: { color: 'red' },
          })
        ),
        React.createElement(
          'button',
          { type: 'submit', disabled: isSubmitting },
          'Register'
        )
      )
  );
};

export default FormikForm;
