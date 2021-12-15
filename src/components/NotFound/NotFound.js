import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const NotFound = () => {
  return (
    <div className="container-fluid text-center">
      <Navbar />
      <h1>URL Or Page Not Found</h1>
      <Link className="btn btn-info me-lg-5" to="/">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
