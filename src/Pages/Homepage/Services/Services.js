import React from 'react';
import { Link } from 'react-router-dom';
// import './Services.css';
import RWHeart from '../../../Assests/RWHeart.png';

const Offers = () => {
  return (
    <div className="container py-md-5 py-3" id="Donate">
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Donate on a cause</h1>
        <p className="fs-5 text-muted">You can donate to any cause you like. these are just some of the ways</p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center py-5">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header text-white bg-success py-3">
              <h4 className="my-0 fw-normal">Save The Earth</h4>
            </div>
            <div>
              <img src={RWHeart} className="img-thumbnail" alt="..." />
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
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header text-white bg-danger py-3">
              <h4 className="my-0 fw-normal">Become A Valunteer</h4>
            </div>
            <div>
              <img src={RWHeart} className="img-thumbnail" alt="..." />
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $10<small className="text-muted fw-light">/or any amount</small>
              </h1>
              <p>You can donate as small as 10 PLN to any amount</p>
              <button type="button" className="w-100 btn btn-lg btn-outline-danger">
                Get started
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-white bg-primary border-primary">
              <h4 className="my-0 fw-normal">Childern Fund</h4>
            </div>
            <div>
              <img src={RWHeart} className="img-thumbnail" alt="..." />
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $10<small className="text-muted fw-light">/or any amount</small>
              </h1>
              <p>You can donate as small as 10 PLN to any amount</p>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="container serviceDiv" id="Donate">
    //   <div className="row">
    //     <div className="col-md-4 col-sm-6 content-card">
    //       <div className="card-big-shadow">
    //         <div className="card card-just-text" data-background="color" data-color="blue" data-radius="none">
    //           <div className="ServiceImageDiv">
    //             <img className="ServiceImage" src={RWHeart} alt="" />
    //           </div>
    //           <div className="content">
    //             <h6 className="category">Become a Valounteer</h6>
    //             <h4 className="title">
    //               <Link to="/#Valounteer">Valounteer</Link>
    //             </h4>
    //             <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    //           </div>
    //         </div>
    //         {/* <!-- end card --> */}
    //       </div>
    //     </div>

    //     <div className="col-md-4 col-sm-6 content-card">
    //       <div className="card-big-shadow">
    //         <div className="card card-just-text" data-background="color" data-color="green" data-radius="none">
    //           <div className="content">
    //             <h6 className="category">Donate money</h6>
    //             <h4 className="title">
    //               <Link to="/#Donations">Donations</Link>
    //             </h4>
    //             <p className="description">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ducimus repellendus doloribus
    //               doloremque natus quidem
    //             </p>
    //           </div>
    //         </div>
    //         {/* <!-- end card --> */}
    //       </div>
    //     </div>

    //     <div className="col-md-4 col-sm-6 content-card">
    //       <div className="card-big-shadow">
    //         <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none">
    //           <div className="content">
    //             <h6 className="category">Donate Items</h6>
    //             <h4 className="title">
    //               <Link to="/#Donations">Donations</Link>
    //             </h4>
    //             <p className="description">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ducimus repellendus doloribus
    //               doloremque natus quidem
    //             </p>
    //           </div>
    //         </div>
    //         {/* <!-- end card --> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Offers;
