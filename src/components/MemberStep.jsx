import React from "react";

function MemberStep() {
  return (
    <>
      {/* Steps */}
      <ul className="w-full relative hidden flex-col md:flex-row gap-2">
        {/* Item */}
        <li className="flex flex-col md:flex-row md:items-center gap-x-2 shrink basis-0 flex-1 group">
          <div className="min-w-7 min-h-7 inline-flex items-center text-xs align-middle grow md:grow-0">
            <span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full">
              1
            </span>
            <span className="ms-2 block grow md:grow-0 text-sm font-medium text-gray-800">
              Complete Profile
            </span>
          </div>
          <div className="mt-2 w-px h-4 md:mt-0 ms-3.5 md:ms-0 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden" />
        </li>
        {/* End Item */}
        {/* Item */}
        <li className="flex flex-col md:flex-row md:items-center gap-x-2 shrink basis-0 flex-1 group">
          <div className="min-w-7 min-h-7 inline-flex items-center text-xs align-middle grow md:grow-0">
            <span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full">
              2
            </span>
            <span className="ms-2 block grow md:grow-0 text-sm font-medium text-gray-800">
              Fill The Form
            </span>
          </div>
          <div className="mt-2 w-px h-4 md:mt-0 ms-3.5 md:ms-0 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden" />
        </li>
        {/* End Item */}
        {/* Item */}
        <li className="flex flex-col md:flex-row md:items-center gap-x-2 shrink basis-0 flex-1 group">
          <div className="min-w-7 min-h-7 inline-flex items-center text-xs align-middle grow md:grow-0">
            <span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full">
              3
            </span>
            <span className="ms-2 block grow md:grow-0 text-sm font-medium text-gray-800">
              Pending
            </span>
          </div>
          <div className="mt-2 w-px h-4 md:mt-0 ms-3.5 md:ms-0 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden" />
        </li>
        <li className="flex flex-col md:flex-row md:items-center gap-x-2 shrink basis-0 flex-1 group">
          <div className="min-w-7 min-h-7 inline-flex items-center text-xs align-middle grow md:grow-0">
            <span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full">
              4
            </span>
            <span className="ms-2 block grow md:grow-0 text-sm font-medium text-gray-800">
              Download PDF
            </span>
          </div>
          <div className="mt-2 w-px h-4 md:mt-0 ms-3.5 md:ms-0 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden" />
        </li>
        {/* End Item */}
      </ul>
      {/* EndSteps */}
    </>
  );
}

export default MemberStep;
