import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import loveInHands from '../../../Assests/loveOnHands.jpg';
import volunteersNeeded from '../../../Assests/volunteersNeeded.png';
import clothDonate from '../../../Assests/clothDonation.jpg';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" />
          </div>
          <div className="carousel-inner  bg-info">
            <div className="carousel-item active ">
              <img src={loveInHands} className="d-block carouselImage" alt="Love in Hand" />
              <div className="carousel-caption d-none d-md-block text-dark ">
                <h2>Donate</h2>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={volunteersNeeded} className="d-block carouselImage" alt="volunteer needed" />
              <div className="carousel-caption d-none d-md-block ">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={clothDonate} className="d-block carouselImage" alt="volunteer" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
