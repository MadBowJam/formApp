// MyForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from '../utils/validationSchema'; // Шлях до файлу validationSchema.js

const MyForm = () => (
  <Formik
    initialValues={{ name: '', email: '', password: '' }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }, 1000);
    }}
    validationSchema={validationSchema} // Використовуємо схему валідації
  >
    {({ isSubmitting }) => (
      <Form>
        <Field type="text" name="name" placeholder="Ваше ім'я" autoComplete="name" />
        <ErrorMessage name="name" component="div" className="error" />
        
        <Field type="email" name="email" placeholder="Електронна пошта" autoComplete="email" />
        <ErrorMessage name="email" component="div" className="error" />
        
        <Field type="password" name="password" placeholder="Пароль" autoComplete="current-password" />
        <ErrorMessage name="password" component="div" className="error" />
        
        <button type="submit" disabled={isSubmitting}>Відправити</button>
      </Form>
    )}
  </Formik>
);

export default MyForm;
