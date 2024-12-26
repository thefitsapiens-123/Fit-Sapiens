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
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-full border bg-emerald-50 text-emerald-700 border-emerald-100">
          <Download size={14} />
          Download PDF
        </span>
      );
    case "PENDING":
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-full border bg-amber-50 text-amber-700 border-amber-100">
          <Clock size={14} />
          Pending
        </span>
      );
    case "SUBMIT":
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-full border bg-blue-50 text-blue-700 border-blue-100">
          <CheckCircle size={14} />
          Complete the form
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-full border bg-primary-50 text-primary-700 border-primary-100">
          <UserCircle size={14} />
          Complete Profile
        </span>
      );
  }
}

export default Status;
