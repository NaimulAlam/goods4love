import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 side-menu">
          <Sidebar />
        </div>
        <div className="col py-3">
          <div className="tab-content">
            <div className="tab-pane fade show active" id="donationList">
              <h4 className="mt-2">Main Dashboard</h4>
              <p>Aliquip placeat salvia cillum iphone. Seitan aliquip</p>
            </div>
            <div className="tab-pane fade" id="allDonations">
              <h4 className="mt-2">allDonations</h4>
              <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p>
            </div>
            <div className="tab-pane fade" id="addAdmin">
              <h4 className="mt-2">Add Admin</h4>
              <p>Donec vel placerat quam, ut euismod risus.</p>
            </div>
            <div className="tab-pane fade" id="addDonation">
              <h4 className="mt-2">Add Donation</h4>
              <p>Donec vel placerat quam, ut euismod risus.</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-3 side-menue">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#sideMenuBtn"
                  aria-controls="sideMenuBtn"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="sideMenuBtn">
                  <ul className="row nav nav-tabs me-auto mb-2 mb-lg-0">
                    <li className="nav-item col-12 gap-2">
                      <Link class="nav-link active" aria-current="page" to="/dashboard/#ocupation">
                        User Details
                      </Link>
                    </li>
                    <li className="nav-item col-12 gap-2">
                      <Link
                        class="nav-link"
                        // data-bs-toggle="collapse"
                        // role="button"
                        // aria-expanded="false"
                        // aria-controls="donationList"
                        to="/dashboard/#donationList"
                      >
                        Donation List
                      </Link>
                    </li>
                    <li className="nav-item col-12 gap-2">
                      <Link
                        class="nav-link"
                        // data-bs-toggle="collapse"
                        // role="button"
                        // aria-expanded="false"
                        // aria-controls="addDonation"
                        to="/dashboard/#addDonation"
                      >
                        Add Donations
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-md-8">
            <div className="collapse" id="ocupation">
              <div className="card card-body">
                <h2>Your ocupation is: {`${ocupation}` || 'No ocupation found'}</h2>
                <form onSubmit={updateOcupation}>
                  <input
                    type="text"
                    placeholder="Ocupation"
                    value={tmpOcupation}
                    onChange={(e) => {
                      return setTmpOcupation(e.target.value);
                    }}
                  />
                  <input type="submit" value="Update Ocupation" />
                </form>
              </div>
            </div>
            <div className="collapse" id="donationList">
              <div className="card card-body">
                <h1>This is Donation List Area</h1>
              </div>
            </div>
            <div className="collapse" id="addDonation">
              <div className="card card-body">
                <h2>This is Add Donations Area</h2>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
