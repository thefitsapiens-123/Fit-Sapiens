import React from "react";
import { Navigate, Outlet } from "react-router";
import useAuth from "./AuthProvider";
import Loading from "../components/loading";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user, role, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  if (allowedRoles.includes(role)) {
    return <Outlet />;
  }

  // Redirect to the appropriate dashboard based on role
  if (role === "ADMIN") {
    return <Navigate to="/admin/dashboard" />;
  } else if (role === "MEMBER") {
    return <Navigate to="/health-info" />;
  }

  return <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;
