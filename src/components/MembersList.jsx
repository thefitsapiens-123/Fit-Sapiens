import React, { useEffect, useState, useCallback } from "react";
import MemberTable from "./MemberTable";
import { ListFilter, Plus, RotateCcw } from "lucide-react";
import { Link } from "react-router";
import Filter from "./Filter";
import { use } from "react";
import { getUsers } from "../firebase/firebaseServices";
import { debounce } from "lodash";
import MemberTableSkeleton from "./skeleton/MemberTableSkeleton";

function MembersList() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statuses, setStatuses] = useState([]);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await getUsers()
        .then((data) => {
          setUsers(data);
          setFilteredUsers(data);
          const uniqueStatuses = [...new Set(data.map((user) => user.status))];
          setStatuses(uniqueStatuses);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    fetchData();
  }, []);

  const handleFilter = (status) => {
    const filtered = users.filter((user) => user.status === status);
    setFilteredUsers(filtered);
    setReset(true);
  };

  const handleReset = () => {
    setFilteredUsers(users);
    setReset(false);
  };

  const handleSearch = useCallback(
    debounce((search) => {
      const trimmedSearch = search.trim().toLowerCase();
      const filtered = users.filter((user) =>
        user.displayName?.toLowerCase().includes(trimmedSearch)
      );
      setFilteredUsers(filtered);
    }, 300),
    [users]
  );

  const handleSearchChange = (e) => {
    const search = e.target.value;
    handleSearch(search);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-neutral-900 border border-gray-700 rounded-xl shadow-sm overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 border-b border-gray-700">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                    <svg
                      className="shrink-0 size-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={11} cy={11} r={8} />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className=" border !py-2 !ps-10 !pe-16 block w-full disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Search"
                    onChange={handleSearchChange}
                  />

                  <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-3 text-gray-400">
                    <svg
                      className="shrink-0 size-3 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                    </svg>
                    <span className="mx-1">
                      <svg
                        className="shrink-0 size-3 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </span>
                    <span className="text-xs">/</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 justify-end">
                    {reset && (
                      <button
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700"
                        onClick={handleReset}
                      >
                        <RotateCcw size={20} />
                        <span className="text-sm text-white">Reset</span>
                      </button>
                    )}
                    <Filter statuses={statuses} onFilter={handleFilter} />

                    <Link
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700"
                      to="/admin/create-member"
                    >
                      <Plus size={20} />
                      Add Member
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Header */}
              {/* Table */}
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-neutral-800">
                  <tr>
                    <th scope="col" className="w-[5%] px-6 py-3 text-start">
                      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-100">
                        No.
                      </span>
                    </th>
                    <th scope="col" className="w-[8%] px-6 py-3 text-start">
                      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-100">
                        Picture
                      </span>
                    </th>
                    <th scope="col" className="w-[20%] px-6 py-3 text-start">
                      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-100">
                        Name
                      </span>
                    </th>
                    <th scope="col" className="w-[25%] px-6 py-3 text-start">
                      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-100">
                        Status
                      </span>
                    </th>
                    <th scope="col" className="w-[20%] px-6 py-3 text-start">
                      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-100">
                        Completed Fields
                      </span>
                    </th>
                    <th scope="col" className="w-[15%] px-6 py-3 text-start">
                      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-100">
                        Created
                      </span>
                    </th>
                    <th scope="col" className="w-[10%] px-6 py-3 text-end">
                      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-100">
                        Actions
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {loading
                    ? Array(10)
                        .fill()
                        .map((_, index) => <MemberTableSkeleton key={index} />)
                    : filteredUsers.map((user, index) => {
                        let formData = user.healthInfo
                          ? Object.keys(user.healthInfo).map((key) => [
                              key,
                              user.healthInfo[key],
                            ])
                          : 0;
                        let date = new Date(user.createdAt).toLocaleString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        );
                        return (
                          <MemberTable
                            key={user.id}
                            serial={index + 1}
                            id={user.id}
                            name={user.displayName}
                            email={user.email}
                            status={user.status}
                            progress={formData.length}
                            date={date}
                            image={user.photoURL}
                          />
                        );
                      })}
                </tbody>
              </table>
              {/* End Table */}
              {/* Footer */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-700">
                <div>
                  <p className="text-sm text-gray-100">
                    <span className="font-semibold text-neutral-100">
                      {filteredUsers.length}
                    </span>{" "}
                    results
                  </p>
                </div>
                <div className="hidden">
                  <div className="inline-flex gap-x-2">
                    <button
                      type="button"
                      className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-700 bg-neutral-900 text-neutral-100 shadow-sm hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800"
                    >
                      <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                      Prev
                    </button>
                    <button
                      type="button"
                      className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-700 bg-neutral-900 text-neutral-100 shadow-sm hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800"
                    >
                      Next
                      <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* End Footer */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MembersList;
