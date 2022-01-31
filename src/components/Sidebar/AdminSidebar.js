import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../../Assests/RWHeart.png';

const AdminSidebar = () => {
  return (
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-danger text-decoration-none">
        <span className="fs-5 d-none d-sm-inline">Goods4Love</span>
      </Link>
      <ul className="nav nav-tabs flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="sidebar">
        <li className="nav-item">
          <Link to="/" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-speedometer2" /> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/donate" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-bag-plus" /> <span className="ms-1 d-none d-sm-inline">Donate</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/donation-list" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-card-list" /> <span className="ms-1 d-none d-sm-inline">Donation List</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/all-donations" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-table" /> <span className="ms-1 d-none d-sm-inline">All Donations</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/add-admin" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-person-plus" /> <span className="ms-1 d-none d-sm-inline">Add Admin</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/add-donation" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-plus-square-dotted" /> <span className="ms-1 d-none d-sm-inline">Add Donation</span>
          </Link>
        </li>
        <hr className="dropdown-divider" />
        <div className="dropdown">
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
              <Link
                onClick={() => {
                  localStorage.removeItem('token');
                }}
                className="dropdown-item"
                to="/"
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default AdminSidebar;
