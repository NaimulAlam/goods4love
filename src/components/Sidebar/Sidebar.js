import React from 'react';
import { Link } from 'react-router-dom';

import userIcon from '../../Assests/RWHeart.png';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-danger text-decoration-none">
        <span className="fs-5 d-none d-sm-inline">Goods4Love</span>
      </Link>
      <ul className="nav nav-tabs flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="sidebar">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-speedometer2" /> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/donate" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-speedometer2" /> <span className="ms-1 d-none d-sm-inline">Donate</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/donationList" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-card-list" /> <span className="ms-1 d-none d-sm-inline">Donation List</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/allDonations" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-table" /> <span className="ms-1 d-none d-sm-inline">All Donations</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/addAdmin" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-person-plus" /> <span className="ms-1 d-none d-sm-inline">Add Admin</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/addDonation" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-plus-square-dotted" /> <span className="ms-1 d-none d-sm-inline">Add Donation</span>
          </Link>
        </li>
        {/* With submenu tabs               
              <li className="nav-item">
                <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-grid" /> <span className="ms-1 d-none d-sm-inline">Products</span>
                </a>
                <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                  <li className="w-100">
                    <a href="#" className="nav-link px-0">
                      <span className="d-none d-sm-inline">Product</span> 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      <span className="d-none d-sm-inline">Product</span> 2
                    </a>
                  </li>
                </ul>
              </li> */}
      </ul>
      <hr />
      <div className="dropdown pb-4">
        <Link
          to="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={userIcon} alt="hugenerd" width="30" height="30" className="rounded-circle" />
          <span className="d-none text-dark d-sm-inline mx-1">User</span>
        </Link>
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser">
          <li className="nav-item">
            <Link className="dropdown-item" to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="#signOut">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
