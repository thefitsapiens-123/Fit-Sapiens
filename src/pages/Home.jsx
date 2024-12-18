import React from "react";
import Dashboard from "../layout/Dashboard";

function Home() {
  return (
    <>
      <main className="hero_section h-screen w-full">
        <div className="container h-screen">
          <div className="form-container flex h-full">
            <div className="md:w-1/2 lg:w-2/3"></div>
            <div className="w-full md:w-1/2 lg:w-1/3 flex items-center">
              <form className="space-y-4 px-7 py-10 rounded-lg w-full bg-white">
                <div className="logo flex items-center justify-center">
                  <img src="/assets/logo.svg" alt="" />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john.doe@example.com"
                    className="transition-all w-full mt-1 p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="password"
                    className="transition-all w-full mt-1 p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition duration-300"
                >
                  Login
                </button>
                <button
                  type="button"
                  class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <a href="/admin/dashboard">View Dashboard</a>
                  <svg
                    class="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
