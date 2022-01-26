import React from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
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