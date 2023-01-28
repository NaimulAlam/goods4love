import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import { UserInfoContext } from "../../App";

const PrivateOutlet = () => {
  const [userInfo] = useContext(UserInfoContext);
  const auth = UseAuth();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateOutlet;
