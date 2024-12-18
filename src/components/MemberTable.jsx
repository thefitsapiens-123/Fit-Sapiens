import {
  Clipboard,
  Edit,
  Eye,
  ListFilter,
  Plus,
  RefreshCcw,
} from "lucide-react";
import React from "react";

function MemberTable() {
  return (
    <>
      {/* Table Section */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Card */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                {/* Header */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
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
                      className=" border py-2 ps-10 pe-16 block w-full bg-white  border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Search"
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
                  <div>
                    <div className="inline-flex gap-x-2">
                      <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
                        <button
                          id="hs-as-table-table-filter-dropdown"
                          type="button"
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          aria-label="Dropdown"
                        >
                          <ListFilter size={20} />
                          Filter
                          <span className="inline-flex items-center gap-1.5 py-0.5 px-1.5 rounded-full text-xs font-medium border border-gray-300 text-gray-800">
                            2
                          </span>
                        </button>
                        <div
                          className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-48 z-20 bg-white shadow-md rounded-lg mt-2"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="hs-as-table-table-filter-dropdown"
                        >
                          <div className="divide-y divide-gray-200">
                            <label
                              htmlFor="hs-as-filters-dropdown-frequency"
                              className="flex py-2.5 px-3"
                            >
                              <input
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-300 rounded text-primary-600 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                                id="hs-as-filters-dropdown-frequency"
                                defaultChecked=""
                              />
                              <span className="ms-3 text-sm text-gray-800">
                                All
                              </span>
                            </label>
                            <label
                              htmlFor="hs-as-filters-dropdown-status"
                              className="flex py-2.5 px-3"
                            >
                              <input
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-300 rounded text-primary-600 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                                id="hs-as-filters-dropdown-status"
                                defaultChecked=""
                              />
                              <span className="ms-3 text-sm text-gray-800">
                                Incomplete Profile
                              </span>
                            </label>
                            <label
                              htmlFor="hs-as-filters-dropdown-created"
                              className="flex py-2.5 px-3"
                            >
                              <input
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-300 rounded text-primary-600 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                                id="hs-as-filters-dropdown-created"
                              />
                              <span className="ms-3 text-sm text-gray-800">
                                Pending
                              </span>
                            </label>
                            <label
                              htmlFor="hs-as-filters-dropdown-due-date"
                              className="flex py-2.5 px-3"
                            >
                              <input
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-300 rounded text-primary-600 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                                id="hs-as-filters-dropdown-due-date"
                              />
                              <span className="ms-3 text-sm text-gray-800">
                                Completed
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <a
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none"
                        href="#"
                      >
                        <Plus size={20} />
                        Add Member
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Header */}
                {/* Table */}
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="w-[8%] px-6 py-3 text-start">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                          No.
                        </span>
                      </th>
                      <th scope="col" className="w-[12%] px-6 py-3 text-start">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                          Picture
                        </span>
                      </th>
                      <th scope="col" className="w-[20%] px-6 py-3 text-start">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                          Name
                        </span>
                      </th>
                      <th scope="col" className="w-[15%] px-6 py-3 text-start">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                          Status
                        </span>
                      </th>
                      <th scope="col" className="w-[20%] px-6 py-3 text-start">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                          Completed Fields
                        </span>
                      </th>
                      <th scope="col" className="w-[15%] px-6 py-3 text-start">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                          Created
                        </span>
                      </th>
                      <th scope="col" className="w-[10%] px-6 py-3 text-end">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                          Actions
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-3">
                        <span className="text-sm text-gray-500">01</span>
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex items-center">
                          <img
                            className="inline-block size-[38px] rounded-full"
                            src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                            alt="Avatar"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        <span className="block font-medium text-gray-800">
                          Christina Bersh
                        </span>
                        <span className="block text-sm text-gray-500">
                          christina@site.com
                        </span>
                      </td>
                      <td className="px-6 py-3">
                        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                          <svg
                            className="size-2.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                          </svg>
                          Download PDF
                        </span>
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex items-center gap-x-3">
                          <span className="text-xs text-gray-500">1/5</span>
                          <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="flex flex-col justify-center overflow-hidden bg-primary-800"
                              role="progressbar"
                              style={{ width: "25%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        <span className="text-sm text-gray-500">
                          28 Dec, 12:12
                        </span>
                      </td>
                      <td className="px-6 py-3 text-end">
                        <div className="inline-flex items-center gap-2">
                          <a
                            href="#"
                            className="transition-all hover:bg-gray-50 inline-flex w-10 h-10 rounded-full items-center justify-center text-gray-600 hover:text-gray-800"
                          >
                            <Eye size={20} />
                          </a>

                          <a
                            href="#"
                            className="transition-all hover:bg-gray-50 inline-flex w-10 h-10 rounded-full items-center justify-center text-gray-600 hover:text-gray-800"
                          >
                            <Edit size={20} />
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* End Table */}
                {/* Footer */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-800">12</span>{" "}
                      results
                    </p>
                  </div>
                  <div>
                    <div className="inline-flex gap-x-2">
                      <button
                        type="button"
                        className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50"
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
                        className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50"
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
        {/* End Card */}
      </div>
      {/* End Table Section */}
    </>
  );
}

export default MemberTable;
