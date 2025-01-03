import React from "react";
import { CheckCircle, Clock, Download, UserCircle } from "lucide-react";
import useAuth from "../context/AuthProvider";

function Status({ status }) {
  const { loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  switch (status) {
    case "DOWNLOAD":
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-full border bg-emerald-800 text-gray-100 border-emerald-800">
          <Download size={14} />
          Download PDF
        </span>
      );
    case "PENDING":
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-full border bg-amber-800 text-gray-100 border-amber-800">
          <Clock size={14} />
          Pending
        </span>
      );
    case "SUBMIT":
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-full border bg-blue-800 text-gray-100 border-b border-blue-800">
          <CheckCircle size={14} />
          Complete the form
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-full border bg-primary-600 text-gray-100 border-primary-800">
          <UserCircle size={14} />
          Complete Profile
        </span>
      );
  }
}

export default Status;
