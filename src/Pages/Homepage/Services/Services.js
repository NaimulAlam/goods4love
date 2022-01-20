import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Offers = () => {
  return (
    <div className="container serviceDiv  ">
      <div className="row">
        <div className="col-md-4 col-sm-6 content-card">
          <div className="card-big-shadow">
            <div className="card card-just-text" data-background="color" data-color="blue" data-radius="none">
              <div className="content">
                <h6 className="category">Become a Valounteer</h6>
                <h4 className="title">
                  <Link to="/#Valounteer">Valounteer</Link>
                </h4>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ducimus repellendus doloribus
                  doloremque natus quidem
                </p>
              </div>
            </div>
            {/* <!-- end card --> */}
          </div>
        </div>

        <div className="col-md-4 col-sm-6 content-card">
          <div className="card-big-shadow">
            <div className="card card-just-text" data-background="color" data-color="green" data-radius="none">
              <div className="content">
                <h6 className="category">Donate money</h6>
                <h4 className="title">
                  <Link to="/#Donations">Donations</Link>
                </h4>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ducimus repellendus doloribus
                  doloremque natus quidem
                </p>
              </div>
            </div>
            {/* <!-- end card --> */}
          </div>
        </div>

        <div className="col-md-4 col-sm-6 content-card">
          <div className="card-big-shadow">
            <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none">
              <div className="content">
                <h6 className="category">Donate Items</h6>
                <h4 className="title">
                  <Link to="/#Donations">Donations</Link>
                </h4>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ducimus repellendus doloribus
                  doloremque natus quidem
                </p>
              </div>
            </div>
            {/* <!-- end card --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
