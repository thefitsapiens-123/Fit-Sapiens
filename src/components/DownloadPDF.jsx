import { Download, FileCheck } from "lucide-react";
import React from "react";

function DownloadPDF() {
  return (
    <>
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
            Download PDF
          </h3>
          <p className="text-gray-500">
            Please complete your profile or remaining deatils to filling this
            from
          </p>
          <div className="mt-6 flex justify-center gap-x-4">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:bg-green-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              <Download />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DownloadPDF;
