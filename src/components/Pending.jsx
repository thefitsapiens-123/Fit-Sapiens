import { Ellipsis } from "lucide-react";
import React from "react";

function Pending() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="bg-white rounded-xl shadow p-4 sm:p-7 max-w-sm text-center">
          {/* Icon */}
          <span className="mb-4 inline-flex justify-center items-center size-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500">
            <Ellipsis />
          </span>
          {/* End Icon */}
          <h3
            id="hs-sign-out-alert-label"
            className="mb-2 text-2xl font-semibold text-gray-800"
          >
            Pending
          </h3>
          <p className="text-gray-500">
            Your form has reaced to the admin we are creating a best diet plan
            for you.
          </p>
        </div>
      </div>
    </>
  );
}

export default Pending;
