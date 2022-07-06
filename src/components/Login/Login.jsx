import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { compose } from 'redux';
import { login } from '../../Redux/auth.reducer';

const Login = (props) => {
  const formik = useFormik({
    initialValues: { email: '', password: '', rememberMe: false },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
    onSubmit: (values) => {
      props.login(values.email, values.password, values.rememberMe);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        // минимальная длина - 2 символа
        .min(2, 'Must be longer than 2 characters')
        // максимальная длина - 20 символов
        .max(20, 'Nice try, nobody has a first name that long')
        .required('Required'),
      password: Yup.string().min(8, 'Must be longer than 8 characters').required('Required'),
    }),
  });

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type={'email'}
            name={'email'}
            placeholder={'Email'}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <p>{formik.errors.email}</p> : null}
        </div>

        <div>
          <input
            type={'password'}
            name={'password'}
            placeholder={'password'}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? <p>{formik.errors.password}</p> : null}
        </div>

        <div>
          <input
            type={'checkbox'}
            name={'rememberMe'}
            onChange={formik.handleChange}
            value={formik.values.rememberMe}
          />
          <label htmlFor={'rememberMe'}> remember me </label>
        </div>

        <button type={'submit'}>Log in</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default compose(connect(mapStateToProps, { login }))(Login);
