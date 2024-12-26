import React from "react";
import { Edit, Eye } from "lucide-react";
import Status from "./Status";
import { Link } from "react-router";
import healthQustion from "../questions/questions";

function MemberTable({
  serial,
  id,
  name,
  email,
  status,
  progress,
  date,
  image,
}) {
  return (
    <>
      <tr>
        <td className="px-6 py-3">
          <span className="text-sm text-gray-500">{serial}</span>
        </td>
        <td className="px-6 py-3">
          <div className="flex items-center">
            <img
              className="inline-block size-[38px] rounded-full"
              src={image || "https://avatar.iran.liara.run/public"}
            />
          </div>
        </td>
        <td className="px-6 py-3">
          <span className="block font-medium text-gray-800">
            {name || "Uncomplete"}
          </span>
          <span className="block text-sm text-gray-500">{email}</span>
        </td>
        <td className="px-6 py-3">
          <Status status={status} />
        </td>
        <td className="px-6 py-3">
          <div className="flex items-center gap-x-3">
            <span className="text-xs text-gray-500">
              {progress || 0}/{healthQustion.length}
            </span>
            <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="flex flex-col justify-center overflow-hidden bg-primary-600"
                role="progressbar"
                style={{ width: `${(progress / healthQustion.length) * 100}%` }}
              />
            </div>
          </div>
        </td>
        <td className="px-6 py-3">
          <span className="text-sm text-gray-500">{date}</span>
        </td>
        <td className="px-6 py-3 text-end">
          <div className="inline-flex items-center justify-center gap-2">
            <Link
              to={`/admin/member/${id}`}
              className="transition-all hover:bg-gray-50 inline-flex w-10 h-10 rounded-full items-center justify-center text-gray-600 hover:text-gray-800"
            >
              <Eye size={20} />
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
}

export default MemberTable;
