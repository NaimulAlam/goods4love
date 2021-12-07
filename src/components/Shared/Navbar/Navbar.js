import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-3 navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand ms-lg-5" href="#Home">
              Goods4Love
            </a>
            <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#AboutUs">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Donate">
                  Donate
                </a>
              </li>
            </ul>
            <a className="btn btn-outline-warning me-lg-5" href="#SignIn">
              Sign In
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
