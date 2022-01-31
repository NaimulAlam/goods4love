/* eslint-disable import/no-cycle */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const NotFound = () => {
  return (
    <div className="container-fluid text-center m-5 pt-5">
      <Navbar />
      <h2 style={{ color: 'red' }}> Sorry!</h2>
      <h2>URL Or Page Not Found</h2>
      <p>
        <Link className="btn btn-info btn-lg mt-5" to="/">
          Go Back
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
