import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserInfoContext } from "../../App";

const Navbar = () => {
  const [userInfo, setUserInfo] = useContext(UserInfoContext);
  // console.log('nav', userInfo);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserInfo(null);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse mt-3" id="navbarMenu">
            <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/#Home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#AboutUs">
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#ContactUs">
                  Contact Us
                </a>
              </li>
              {userInfo?.email ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/donate">
                      Donate
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/#donate">
                    Donate
                  </a>
                </li>
              )}
            </ul>
            {userInfo?.email ? (
              <Link
                className="btn btn-outline-danger me-lg-5"
                onClick={handleLogout}
                to="/"
              >
                Sign out
              </Link>
            ) : (
              <Link className="btn btn-outline-warning me-lg-5" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
