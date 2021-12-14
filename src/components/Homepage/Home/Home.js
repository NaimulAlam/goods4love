import React from 'react';
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
      <Footer />
    </div>
  );
};

export default Home;
