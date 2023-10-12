import React from "react";
import { useEffect } from "react";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export const Logout = () => {
  const signOut = useSignOut();
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    signOut();
    // <Navigate to="/auth/login" state={{ from: location }} replace />;
    navigate("/auth/login", {
      replace: true,
      state: { from: location },
    });
  }, []);
};
