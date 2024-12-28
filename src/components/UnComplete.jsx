import { ChevronsRight } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import Loading from "./Loading";

function UnComplete() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="bg-white rounded-xl shadow p-4 sm:p-7 max-w-sm text-center">
          {/* Icon */}
          <span className="mb-4 inline-flex justify-center items-center size-[62px] rounded-full border-4 border-red-50 bg-red-100 text-red-500">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </span>
          {/* End Icon */}
          <h3 className="mb-2 text-2xl font-semibold text-gray-800">
            Complete Profile
          </h3>
          <p className="text-gray-500">
            Please complete your profile or remaining deatils to filling this
            from
          </p>
          <div className="mt-6 flex justify-center gap-x-4">
            <Link
              to="/profile"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Complete
              <ChevronsRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnComplete;
