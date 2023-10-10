import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { userToken } from "../stores/reducers/user";

const CheckAuth = () => {
  const token = userToken;
  const location = useLocation();
  return token ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default CheckAuth;
