import React from 'react';
import './Reviews.css';

const Reviews = () => {
  return (
    <div className="container py-md-5 py-3" id="Reviews">
      <h2 className="text-center bg-info py-3">What People say about us :-</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="content-slider">
            <div className="slider">
              <div className="mask">
                <ul>
                  <li className="anim1">
                    <div className="quote">Hello, this is a quote from a person.</div>
                    <div className="source">- Person</div>
                  </li>
                  <li className="anim2">
                    <div className="quote">Hello, this is a quote from another person.</div>
                    <div className="source">- Another person</div>
                  </li>
                  <li className="anim3">
                    <div className="quote">Hello, this is a quote from Review.</div>
                    <div className="source">- Naim</div>
                  </li>
                  <li className="anim4">
                    <div className="quote">Hello, this is a quote from Review.</div>
                    <div className="source">- Alam</div>
                  </li>
                  <li className="anim5">
                    <div className="quote">How do ya like that.</div>
                    <div className="source">- Naim</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="content-slider">
            <div className="slider">
              <div className="mask">
                <ul>
                  <li className="anim1">
                    <div className="quote">Hello, this is a quote from a person.</div>
                    <div className="source">- Person</div>
                  </li>
                  <li className="anim2">
                    <div className="quote">Hello, this is a quote from another person.</div>
                    <div className="source">- Another person</div>
                  </li>
                  <li className="anim3">
                    <div className="quote">Hello, this is a quote from Review.</div>
                    <div className="source">- Naim</div>
                  </li>
                  <li className="anim4">
                    <div className="quote">Hello, this is a quote from Review.</div>
                    <div className="source">- Alam</div>
                  </li>
                  <li className="anim5">
                    <div className="quote">How do ya like that.</div>
                    <div className="source">- Naim</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
