// src/components/PrivateRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = localStorage.getItem("token");
  const location = useLocation();

  return isLoggedIn ? (
    <Component />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
