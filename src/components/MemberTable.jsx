import React, { useState } from "react";
import { Edit, Eye, Trash2 } from "lucide-react";
import Status from "./Status";
import { Link } from "react-router";
import healthQustion from "../questions/questions";
import { toast } from "react-toastify";
import { totalQuestions } from "../questions/healthQuery";

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
  const [loading, setLoading] = useState(false);
  const baseUrl = `https://firebase-admin-sdk-bw3w.onrender.com/api/users/${id}`;

  const handleDelete = async () => {
    setLoading(true);
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the member?`
    );
    if (!confirmDelete) {
      setLoading(false);
      return;
    }

    try {
      await fetch(baseUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location.reload();
      toast.success("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <tr>
        <td className="px-6 py-3">
          <span className="text-sm .text-neutral-50">{serial}</span>
        </td>
        <td className="px-6 py-3">
          <div className="flex items-center">
            <img
              className="inline-block rounded-full"
              src={`${image}` || "https://avatar.iran.liara.run/public"}
              style={{ maxWidth: "50px", height: "50px" }}
            />
          </div>
        </td>
        <td className="px-6 py-3">
          <span className="block font-medium text-neutral-100">
            {name || "Uncomplete"}
          </span>
          <span className="block text-sm .text-neutral-50">{email}</span>
        </td>
        <td className="px-6 py-3">
          <Status status={status} />
        </td>
        <td className="px-6 py-3">
          <div className="flex items-center gap-x-3">
            <span className="text-xs .text-neutral-50">
              {progress || 0}/{totalQuestions}
            </span>
            <div className="flex w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="flex flex-col justify-center overflow-hidden bg-primary-600"
                role="progressbar"
                style={{
                  width: `${(progress / totalQuestions) * 100}%`,
                }}
              />
            </div>
          </div>
        </td>
        <td className="px-6 py-3">
          <span className="text-sm .text-neutral-50">{date}</span>
        </td>
        <td className="px-6 py-3 text-end">
          <div className="inline-flex items-center justify-center gap-2">
            <Link
              to={`/admin/member/${id}`}
              className="transition-all hover:bg-neutral-800 inline-flex w-10 h-10 rounded-full items-center justify-center text-gray-100 hover:text-neutral-100"
            >
              <Eye size={20} />
            </Link>
            <button
              className="transition-all hover:bg-primary-600 hover:text-white inline-flex w-10 h-10 rounded-full items-center justify-center text-primary-600"
              onClick={handleDelete}
              disabled={loading ? true : false}
            >
              {loading ? (
                <div
                  className="animate-spin inline-block size-3 border-[3px] border-current border-t-transparent text-primary-600 rounded-full"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <Trash2 size={20} />
              )}
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default MemberTable;
