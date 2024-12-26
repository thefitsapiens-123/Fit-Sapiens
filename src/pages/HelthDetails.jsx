import React from "react";
import UnComplete from "../components/UnComplete";
import DownloadPDF from "../components/DownloadPDF";
import Pending from "../components/Pending";
import useAuth from "../context/AuthProvider";
import HealthForm from "../components/HealthForm";

function HelthDetails() {
  const { status } = useAuth();

  switch (status) {
    case "DOWNLOAD":
      return <DownloadPDF />;
    case "PENDING":
      return <Pending />;
    case "SUBMIT":
      return <HealthForm />;
    default:
      return <UnComplete />;
  }
}

export default HelthDetails;
