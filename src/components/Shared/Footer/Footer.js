import React from 'react';
import './Footer.css';

const Footer = () => {
  const presentYear = new Date().getFullYear();

  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 me-3">
            <h4>Goods 4 Love</h4>
            <p className="ps-2 pt-2 pb-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quisquam aspernatur laudantium tenetur sit
              quas maiores, sequi libero voluptatum? Explicabo aspernatur inventore quae ut illo aliquid ipsam, sint
              veritatis voluptate.
            </p>
            <ul className="nav flex-column" />
            <ul className="d-flex flex-wrap align-items-center">
              <li className="px-2">
                <a href="#pin">
                  <i className="fab fa-pinterest-p" />
                </a>
              </li>
              <li className="px-2">
                <a href="#facebook">
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li className="px-2">
                <a href="#twitter">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="px-2">
                <a href="#dribble">
                  <i className="fab fa-dribbble" />
                </a>
              </li>
              <li className="px-2">
                <a href="#behance">
                  <i className="fab fa-behance" />
                </a>
              </li>
              <li className="px-2">
                <a href="#linkedin">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3 text-center">
            <h5>Useful links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#Home" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#About" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#Donate" className="nav-link p-0 text-muted">
                  Donate
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#FAQs" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-4 px-2">
            <form>
              <h5>Contact</h5>
              <p>lorem ipsum dolor sit amet, consectetur adipisicing</p>
              <p>lorem ipsum dolor sit amet, consectetur adipisicing</p>
              <p>lorem ipsum dolor sit amet, consectetur adipisicing</p>
              <div className="d-flex w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-danger" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-between py-4 my-4 border-top">
          <p>
            &copy; {presentYear} All rights reserved | by <span style={{ color: 'red' }}> Goods4Love</span>
          </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="#twitter">
                <a href="#twitter" style={{ color: 'red' }}>
                  <i className="fab fa-twitter" />
                </a>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#insta">
                <a href="#insta" style={{ color: 'red' }}>
                  <i className="fab fa-instagram" />
                </a>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#facebook">
                <a href="#facebook" style={{ color: 'red' }}>
                  <i className="fab fa-facebook" />
                </a>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
