import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import donateEuro from '../../../Assests/donateEuro.jpg';
import RWHeart from '../../../Assests/RWHeart.png';
import clothDonate from '../../../Assests/clothDonation.jpg';
import './Header.css';

const Header = () => {
  return (
    <div>
      {/* This is Navbar */}
      <Navbar />
      {/* This is carousel */}
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
          <div className="carousel-inner  ">
            <div className="carousel-item active ">
              <img src={donateEuro} className="d-block carouselImage" alt="Love in Hand" />
              <div className="carousel-caption d-md-block">
                <a className="btn btn-danger btn-md mx-2 my-2" role="button">
                  Donate Now
                </a>
                <a className="btn btn-outline-info btn-md mx-2 my-2" role="button">
                  read more
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={RWHeart} className="d-block carouselImage" alt="volunteer needed" />
              <div className="carousel-caption d-md-block">
                <a className="btn btn-danger btn-md mx-2 my-2" role="button">
                  Donate Now
                </a>
                <a className="btn btn-outline-info btn-md mx-2 my-2" role="button">
                  read more
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={clothDonate} className="d-block carouselImage" alt="volunteer" />
              <div className="carousel-caption d-md-block">
                <a className="btn btn-danger btn-md mx-2 my-2" role="button">
                  Donate Now
                </a>
                <a className="btn btn-outline-info btn-md mx-2 my-2" role="button">
                  read more
                </a>
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
