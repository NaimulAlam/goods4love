/* eslint-disable import/no-cycle */
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Navbar from '../../components/Navbar/Navbar';
import './Login.css';
// eslint-disable-next-line import/no-cycle
import { UserContext } from '../../App';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);

  const navigate = useNavigate();
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
      .required('Email is required')
      .lowercase(),
    password: Yup.string().required('Password is required'),
  });

  const formOptions = { resolver: yupResolver(loginSchema) };

  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm(formOptions);

  // login api call
  const onSubmit = async (submit) => {
    // console.log(submit);
    const url = 'https://goods4love.herokuapp.com/api/login';
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(submit),
    });
    const data = await response.json();
    if (data.userToken) {
      localStorage.setItem('token', data.userToken);
      navigate('/dashboard');
      setIsLoggedIn(true);
    } else {
      // console.log('error');
      alert('Sign In Failed! Check your email and password');
    }
  };
  console.log(errors);

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoggedIn(true);
      window.location.reload();
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn, setIsLoggedIn]);

  return (
    <div>
      <Navbar />
      <div id="SignIn" className="container-fluid text-center">
        <h1 className="m-4">Goods4Love</h1>
        <h2 style={{ color: 'red' }}>LOGO</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="formDiv row g-3 my-4 px-md-5">
          {/* <form className="loginForm my-4 pt-5"> */}
          <div className="card-header text-center">
            <h2>Login</h2>
          </div>
          <div className="col-12 position-relative">
            <input
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              type="text"
              name="email"
              placeholder="Email"
              {...register('email')}
            />
            <div className="invalid-feedback">please type correct email address</div>
          </div>
          <div className="col-12 position-relative">
            <input
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              type="password"
              name="password"
              placeholder="Password"
              {...register('password')}
            />
            <div className="invalid-feedback">please type correct password</div>
          </div>
          <div>
            <p>
              Don't Remember your password? <Link to="/reset">reset</Link>
            </p>
          </div>
          <div className="container">
            <button type="submit" className="btn btn-info px-4">
              Sign In
            </button>
          </div>
          <div>
            <h2>or</h2>
          </div>
        </form>
        <div className="container">
          <p className="my-4">
            Don't have an Account? <Link to="/registration">create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
