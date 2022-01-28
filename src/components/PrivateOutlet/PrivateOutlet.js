import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';

const PrivateOutlet = () => {
  const auth = UseAuth();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateOutlet;
