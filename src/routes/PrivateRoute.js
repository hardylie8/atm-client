import React from "react";
import { useSelector } from "react-redux";
import TopUp from "./../Pages/TopUp/TopUp";

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const { token, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <TopUp />;
  }
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
