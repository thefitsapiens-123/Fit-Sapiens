import { Download, FileCheck, Eye } from "lucide-react";
import React, { useState, useEffect } from "react";
import { getUserDoc } from "../firebase/firebaseServices"; // Ensure this imports your Firebase function correctly
import { auth } from "../firebase/firebaseConfig"; // Ensure correct Firebase auth import
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

  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-white rounded-xl shadow p-4 sm:p-7 max-w-sm text-center">
        {/* Icon */}
        <span className="mb-4 inline-flex justify-center items-center size-[62px] rounded-full border-4 border-green-50 bg-green-100 text-green-500">
          <FileCheck />
        </span>
        {/* End Icon */}
        <h3
          id="hs-sign-out-alert-label"
          className="mb-2 text-2xl font-semibold text-gray-800"
        >
          {pdfUrl ? "Your PDF is Ready" : "Complete Your Profile"}
        </h3>
        <p className="text-gray-500">
          {pdfUrl
            ? "You can download or preview your PDF below."
            : "Please complete your profile to enable PDF access."}
        </p>
        <div className="mt-6 flex justify-center gap-x-4">
          {pdfUrl ? (
            <>
              <Link
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <Eye />
                Preview
              </Link>
              <Link
                href={pdfUrl}
                download
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <Download />
                Download
              </Link>
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
