import { Download, FileCheck, Eye } from "lucide-react";
import React, { useState, useEffect } from "react";
import { getUserDoc } from "../firebase/firebaseServices";
import { auth } from "../firebase/firebaseConfig";
import { Link } from "react-router";

function DownloadPDF() {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    async function fetchUserDoc() {
      try {
        const userDoc = await getUserDoc(auth.currentUser.uid);
        setPdfUrl(userDoc?.memberPDF);
      } catch (error) {
        console.error("Error fetching user document: ", error);
      }
    }
    fetchUserDoc();
    console.log(pdfUrl);
  }, [auth.currentUser.uid]);

  const handleDownload = async () => {
    const response = await fetch(pdfUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Fit-Sapiens.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full grid md:grid-cols-[60%,40%] gap-4">
      <div className="h-full w-full">
        <object
          className="pdf"
          data={pdfUrl}
          width="100%"
          height="600"
          type="application/pdf"
        ></object>
      </div>
      <div className="bg-neutral-900 rounded-xl shadow p-4 sm:p-7 text-center h-max">
        {/* Icon */}
        <span className="mb-4 inline-flex justify-center items-center size-[62px] rounded-full border-4 border-green-800 bg-green-800 text-gray-100">
          <FileCheck />
        </span>
        {/* End Icon */}
        <h3
          id="hs-sign-out-alert-label"
          className="mb-2 text-2xl font-semibold text-neutral-100"
        >
          {pdfUrl ? "Your PDF is Ready" : "Complete Your Profile"}
        </h3>
        <p className=".text-neutral-50">
          {pdfUrl
            ? "You can download or preview your PDF below."
            : "Please complete your profile to enable PDF access."}
        </p>
        <div className="mt-6 flex justify-center gap-x-4">
          {pdfUrl ? (
            <>
              <Link
                to={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-300 bg-neutral-800 text-gray-100 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <Eye />
                Preview
              </Link>
              <button
                onClick={handleDownload}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-800 text-white"
              >
                <Download />
                Download
              </button>
            </>
          ) : (
            <button
              type="button"
              disabled
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-400 text-white opacity-50 cursor-not-allowed"
            >
              <Download />
              Not Available
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DownloadPDF;
