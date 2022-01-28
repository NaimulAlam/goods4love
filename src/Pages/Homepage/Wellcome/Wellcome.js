import React from 'react';
import { Link } from 'react-router-dom';
import './Wellcome.css';
import loveInHands from '../../../Assests/loveOnHands.jpg';

const Wellcome = () => {
  return (
    <div id="AboutUs">
      <div className="home-page-welcome">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <div className="welcome-content">
                <header className="entry-header">
                  <h2 className="entry-title">About Us</h2>
                </header>
                <div className="entry-content mt-5">
                  <h2 className="entry-title">Wellcome to our Charity</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis
                    aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris
                    quis aliquam. Integer accumsan sodales odio, id tempus velit ullamcorper id. Quisque at erat eu
                    libero consequat tempus. Quisque molestie convallis tempus. Ut semper purus metus, a euismod sapien
                    sodales ac. Duis viverra eleifend fermentum.
                  </p>
                </div>
                <div className="entry-footer mt-5">
                  <Link to="/#About" className="btn gradient-bg mr-2">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mt-4 order-1 order-lg-2">
              <img className="img-fluid" src={loveInHands} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wellcome;
