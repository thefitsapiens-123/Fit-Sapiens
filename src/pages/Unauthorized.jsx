import React from "react";
import { Link } from "react-router";
import useAuth from "../context/AuthProvider";
import { LockKeyhole } from "lucide-react";

function Unauthorized() {
  const { role } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-6">
          <LockKeyhole className="w-8 h-8 text-primary-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Access Denied</h1>
        <p className="text-gray-600 mb-8">
          Sorry, you don't have permission to access this page. Please contact
          your administrator or sign in with appropriate credentials.
        </p>
        <Link
          to={role === "ADMIN" ? "/admin/dashboard" : "/profile"}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default Unauthorized;
