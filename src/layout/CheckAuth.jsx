import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { userToken } from "../stores/reducers/user";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";

const CheckAuth = () => {
  const authUser = useAuthUser();
  const isAuthenticated = useIsAuthenticated();
  console.log(isAuthenticated());
  const location = useLocation();
  return isAuthenticated() ? (
    <Navigate to="/home" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default CheckAuth;
