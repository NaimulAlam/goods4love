import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const NotFound = () => {
  return (
    <div className="container-fluid text-center">
      <Navbar />
      <h2 style={{ color: 'red' }}> Sorry!</h2>
      <h2>URL Or Page Not Found</h2>
      <p>
        <Link className="btn btn-info" to="/">
          Go Back
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
