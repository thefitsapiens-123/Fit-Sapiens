import React from "react";
import { Navigate, Outlet } from "react-router";
import useAuth from "./AuthProvider";
import Loading from "../components/Loading";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user, role, loading } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  if (loading || !role) {
    return <Loading />;
  }

  if (allowedRoles.includes(role)) {
    return <Outlet />;
  }

  // Redirect based on role
  return role === "ADMIN" ? (
    <Navigate to="/admin/dashboard" />
  ) : (
    <Navigate to="/health-info" />
  );
};

export default ProtectedRoute;
