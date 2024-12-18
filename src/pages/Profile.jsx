import React from "react";

function Profile() {
  return (
    <>
      {/* Card Section */}
      <div className="w-full">
        {/* Card */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-7">
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-gray-800">
              Complete Your Profile
            </h2>
            <p className="text-sm text-gray-600">
              Manage your name, password and account settings.
            </p>
          </div>
          <form>
            {/* Grid */}
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
              <div className="sm:col-span-3">
                <label className="inline-block  text-gray-800 mt-2.5">
                  Profile photo
                </label>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9">
                <div className="flex items-center gap-5">
                  <img
                    className="inline-block size-16 rounded-full ring-2 ring-white"
                    src="https://preline.co/assets/img/160x160/img1.jpg"
                    alt="Avatar"
                  />
                  <div className="flex gap-x-2">
                    <div>
                      <form class="max-w-sm">
                        <input
                          type="file"
                          name="file-input"
                          className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-100 file:border-0 file:me-4 file:py-3 file:px-4"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Col */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-full-name"
                  className="inline-block  text-gray-800 mt-2.5"
                >
                  Full name
                </label>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9">
                <div className="sm:flex gap-4">
                  <input
                    id="af-account-full-name"
                    type="text"
                    placeholder="John"
                    name="firstName"
                  />
                  <input type="text" placeholder="Doe" name="lastName" />
                </div>
              </div>
              {/* End Col */}
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
                  value="johndoe@example.com"
                  disabled
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
                <div className="space-y-2">
                  <input
                    id="af-account-password"
                    type="text"
                    value="password"
                    disabled
                  />
                </div>
              </div>
              {/* End Col */}
              <div className="sm:col-span-3">
                <div className="inline-block">
                  <label
                    htmlFor="af-account-phone"
                    className="inline-block  text-gray-800 mt-2.5"
                  >
                    Phone
                  </label>
                </div>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9">
                <input
                  id="af-account-phone"
                  type="text"
                  placeholder="+x(xxx)xxx-xx-xx"
                />
              </div>
              {/* End Col */}
              <div className="sm:col-span-3 hidden">
                <label
                  htmlFor="af-account-gender-checkbox"
                  className="inline-block  text-gray-800 mt-2.5"
                >
                  Gender
                </label>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9 hidden">
                <div className="sm:flex">
                  <label
                    htmlFor="af-account-gender-checkbox"
                    className="flex items-center py-3 px-6 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg  relative focus:z-10 focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <input
                      type="radio"
                      name="af-account-gender-checkbox"
                      className="shrink-0 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                      id="af-account-gender-checkbox"
                      defaultChecked=""
                    />
                    <span className="leading-none text-gray-500 ms-3">
                      Male
                    </span>
                  </label>
                  <label
                    htmlFor="af-account-gender-checkbox-female"
                    className="flex items-center py-3 px-6 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg  relative focus:z-10 focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <input
                      type="radio"
                      className="shrink-0 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                      name="af-account-gender-checkbox"
                      id="af-account-gender-checkbox-female"
                    />
                    <span className=" text-gray-500 ms-3">Female</span>
                  </label>
                  <label
                    htmlFor="af-account-gender-checkbox-other"
                    className="flex items-center py-3 px-6 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg  relative focus:z-10 focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <input
                      type="radio"
                      className="shrink-0 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                      name="af-account-gender-checkbox"
                      id="af-account-gender-checkbox-other"
                    />
                    <span className=" text-gray-500 ms-3">Other</span>
                  </label>
                </div>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
            <div className="mt-5 flex justify-end gap-x-2">
              <button
                type="button"
                className="py-3 px-5 inline-flex items-center gap-x-2 font-medium rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Complete Profile
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

export default Profile;
