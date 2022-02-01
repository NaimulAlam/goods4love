import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import RWHeart from '../../../Assests/RWHeart.png';
import SaveEarth from '../../../Assests/Save-Earth.png';
import saveChildren from '../../../Assests/saveChildren.png';

const Offers = () => {
  return (
    <div className="container py-md-5 py-3" id="Donate">
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Donate on a cause</h1>
        <p className="fs-5 text-muted">You can donate to any cause you like. these are just some of the ways</p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center py-5">
        <div className="col">
          <div className="card h-100 mb-4 rounded-3 shadow-sm border-success">
            <div className="card-header text-white bg-success py-3">
              <h4 className="my-0 fw-normal">Save The Earth</h4>
            </div>
            <div>
              <img src={SaveEarth} className="img-thumbnail ServiceImage" alt="..." />
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $10<small className="text-muted fw-light">/or any amount</small>
              </h1>
              <p>You can donate as small as 10 PLN to any amount</p>
              <Link to="/donate">
                <button type="button" className="w-100 btn btn-lg btn-outline-success">
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 mb-4 rounded-3 shadow-sm border-danger">
            <div className="card-header text-white bg-danger py-3">
              <h4 className="my-0 fw-normal">Become A Valunteer</h4>
            </div>
            <div>
              <img src={RWHeart} className="img-thumbnail ServiceImage" alt="..." />
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $10<small className="text-muted fw-light">/or any amount</small>
              </h1>
              <p>You can donate as small as 10 PLN to any amount</p>
              <Link to="/profile">
                <button type="button" className="w-100 btn btn-lg btn-outline-danger">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-white bg-primary border-primary">
              <h4 className="my-0 fw-normal">Childern Fund</h4>
            </div>
            <div>
              <img src={saveChildren} className="img-thumbnail ServiceImage" alt="..." />
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $10<small className="text-muted fw-light">/or any amount</small>
              </h1>
              <p>You can donate as small as 10 PLN to any amount</p>
              <Link to="/donate">
                <button type="button" className="w-100 btn btn-lg btn-outline-primary">
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
