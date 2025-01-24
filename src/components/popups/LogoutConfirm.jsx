import React, { useState } from "react";
import { useNavigate } from "react-router";
import { logout } from "../../firebase/firebaseServices";

function LogoutPop() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const handleLogout = () => {
    setLoading(true);
    try {
      setTimeout(async () => {
        await logout();
        setLoading(false);
        navigate("/");
      }, 1500);
    } catch (error) {
      setLoading(false);
      console.log("Error logging out: ", error);
    }
  };

  if (isActive) {
    return (
      <>
        <div className="size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto flex items-center justify-center bg-slate-950 backdrop-blur-sm bg-opacity-60">
          <div className="mt-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div className="relative flex flex-col bg-neutral-900 shadow-lg rounded-xl">
              <div className="absolute top-2 end-2">
                <button
                  type="button"
                  className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-800 text-neutral-100 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => setIsActive(!isActive)}
                >
                  <span className="sr-only">Close</span>
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-4 sm:p-10 text-center overflow-y-auto">
                {/* Icon */}
                <span className="mb-4 inline-flex justify-center items-center size-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500">
                  <svg
                    className="shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </span>
                {/* End Icon */}
                <h3
                  id="hs-danger-alert-label"
                  className="mb-2 text-2xl font-bold text-neutral-100"
                >
                  Sign out
                </h3>
                <p className=".text-neutral-50 my-2">
                  Are you sure you would like to sign out of <br />
                  your Fit Sapiens account?
                </p>
                <div className="mt-6 flex justify-center gap-x-4">
                  <button
                    type="button"
                    className="py-3 px-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={handleLogout}
                  >
                    {loading ? (
                      <div
                        className="animate-spin inline-block size-5 border-[3px] border-current border-t-transparent text-white rounded-full"
                        role="status"
                        aria-label="loading"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      "Sign out"
                    )}
                  </button>
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-700 bg-neutral-900 text-neutral-100 shadow-sm hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800"
                    onClick={() => setIsActive(!isActive)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LogoutPop;
