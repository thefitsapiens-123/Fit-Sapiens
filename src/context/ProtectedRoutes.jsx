import React from "react";
import { Navigate, Outlet } from "react-router";
import useAuth from "./AuthProvider";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user, role } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  if (allowedRoles.includes(role)) {
    return <Outlet />;
  }

  return <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;
