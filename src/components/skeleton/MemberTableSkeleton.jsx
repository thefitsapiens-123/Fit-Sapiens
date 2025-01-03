import React from "react";

const MemberTableSkeleton = () => {
  return (
    <tr className="animate-pulse">
      <td className="px-6 py-3">
        <div className="h-4 w-8 bg-gray-700 rounded"></div>
      </td>

      <td className="px-6 py-3">
        <div className="flex items-center">
          <div className="size-[38px] rounded-full bg-gray-700"></div>
        </div>
      </td>

      <td className="px-6 py-3">
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-700 rounded"></div>
          <div className="h-3 w-40 bg-gray-700 rounded"></div>
        </div>
      </td>

      <td className="px-6 py-3">
        <div className="h-6 w-20 bg-gray-700 rounded-full"></div>
      </td>

      <td className="px-6 py-3">
        <div className="flex items-center gap-x-3">
          <div className="h-3 w-12 bg-gray-700 rounded"></div>
          <div className="flex w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div className="w-2/3 bg-gray-300"></div>
          </div>
        </div>
      </td>

      <td className="px-6 py-3">
        <div className="h-4 w-24 bg-gray-700 rounded"></div>
      </td>

      <td className="px-6 py-3 text-end">
        <div className="inline-flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-gray-700"></div>
        </div>
      </td>
    </tr>
  );
};

export default MemberTableSkeleton;
