import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const presentYear = new Date().getFullYear();

  return (
    <div className="container">
      <footer className="pt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <h4 className="ps-2 pt-2 pb-2">Goods 4 Love</h4>
            <p className="ps-2 pt-2 pb-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quisquam aspernatur laudantium tenetur sit
              quas maiores, sequi libero voluptatum? Explicabo aspernatur inventore quae ut illo aliquid ipsam, sint
              veritatis voluptate.
            </p>
            <ul className="nav flex-column" />
            <ul className="d-flex flex-wrap align-items-center">
              <li className="px-2">
                <Link to="/#pin">
                  <i className="fab fa-pinterest-p" />
                </Link>
              </li>
              <li className="px-2">
                <Link to="/#facebook">
                  <i className="fab fa-facebook" />
                </Link>
              </li>
              <li className="px-2">
                <Link to="/#twitter">
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li className="px-2">
                <Link to="/#dribble">
                  <i className="fab fa-dribbble" />
                </Link>
              </li>
              <li className="px-2">
                <Link to="/#behance">
                  <i className="fab fa-behance" />
                </Link>
              </li>
              <li className="px-2">
                <Link to="/#linkedin">
                  <i className="fab fa-linkedin" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6" id="ContactUs">
            <div className="row">
              <div className="col-12 col-md-6 px-2">
                <h5 className="ps-2 pt-2 text-center pb-2">Contact Us</h5>
                <div className="row gx-2 text-center px-lg-2">
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <div className=" col-12 col-md-6 text-center">
                <h5>Useful links</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link to="/" className="nav-link p-0 text-muted">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/#AboutUs" className="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/#Donate" className="nav-link p-0 text-muted">
                      Donate
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/FAQs" className="nav-link p-0 text-muted">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 mx-3">
                <form className="contactForm gy-2">
                  <div className="d-flex w-100 gap-2 my-lg-2 my-3 ">
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Subcribe for newsletter"
                    />
                    <button className="btn btn-danger" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between pt-5 mt-5 border-top">
          <p>
            &copy; {presentYear} All rights reserved | by <span style={{ color: 'red' }}> Goods4Love</span>
          </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <p className="link-dark">
                <Link to="/#twitter" style={{ color: 'red' }}>
                  <i className="fab fa-twitter" />
                </Link>
              </p>
            </li>
            <li className="ms-3">
              <p className="link-dark">
                <Link to="/#insta" style={{ color: 'red' }}>
                  <i className="fab fa-instagram" />
                </Link>
              </p>
            </li>
            <li className="ms-3">
              <p className="link-dark">
                <Link to="/#facebook" style={{ color: 'red' }}>
                  <i className="fab fa-facebook" />
                </Link>
              </p>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
