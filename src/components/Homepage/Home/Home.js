import React from 'react';
import Login from '../../Login/Login';
import RegistrationForm from '../../RegistrationForm/RegistrationForm';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Wellcome from '../Wellcome/Wellcome';

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Wellcome />
      <Login />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Home;
