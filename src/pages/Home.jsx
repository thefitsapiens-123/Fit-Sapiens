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
                  <img src="/logo.svg" alt="" />
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
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
