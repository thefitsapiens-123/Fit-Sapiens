import React, { useEffect } from "react";
import { useOutletContext } from "react-router";

function CreateAdmin() {
  const { setPageTitle } = useOutletContext();

  useEffect(() => {
    setPageTitle("Create Member");
  }, [setPageTitle]);

  return (
    <>
      {/* Card Section */}
      <div className="w-full">
        {/* Card */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-7">
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-gray-800">
              Create Member/Admin
            </h2>
            <p className="text-sm text-gray-600">
              Create member with same email and password that he provide in
              wordpress
            </p>
          </div>
          <form>
            {/* Grid */}
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-email"
                  className="inline-block  text-gray-800 mt-2.5"
                >
                  Email
                </label>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9">
                <input
                  id="af-account-email"
                  type="email"
                  placeholder="johndoe@example.com"
                />
              </div>
              {/* End Col */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-password"
                  className="inline-block  text-gray-800 mt-2.5"
                >
                  Password
                </label>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9">
                <input
                  id="af-account-password"
                  type="text"
                  placeholder="password"
                />
              </div>
              {/* End Col */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-role"
                  className="inline-block  text-gray-800 mt-2.5"
                >
                  Role
                </label>
              </div>
              <div className="sm:col-span-9">
                <select id="af-account-role">
                  <option value="" disabled selected>
                    Select the role
                  </option>
                  <option value="member">Member</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            {/* End Grid */}
            <div className="mt-5 flex justify-end gap-x-2">
              <button
                type="button"
                className="py-3 px-5 inline-flex items-center gap-x-2 font-medium rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Create Member
              </button>
            </div>
          </form>
        </div>
        {/* End Card */}
      </div>
      {/* End Card Section */}
    </>
  );
}

export default CreateAdmin;
