import React from 'react';
import Login from '../../Login/Login';
import RegistrationForm from '../../RegistrationForm/RegistrationForm';
import Header from '../Header/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <Login />
      <RegistrationForm />
    </div>
  );
};

export default Home;
