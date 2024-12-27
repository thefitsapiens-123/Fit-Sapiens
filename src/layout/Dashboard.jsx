import {
  CircleArrowOutUpLeft,
  FileText,
  LayoutGrid,
  Menu,
  MessageCircleQuestion,
  PanelRightClose,
  UserPlus,
  UserRoundPen,
} from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import MemberStep from "../components/MemberStep";
import { logout } from "../firebase/firebaseServices";
import { toast } from "react-toastify";
import Status from "../components/Status";
import useAuth from "../context/AuthProvider";

function DashboardLayout() {
  const { user, status, role } = useAuth();
  const navigate = useNavigate();
  const mainMenu = [
    {
      path: "/admin/dashboard",
      icon: <LayoutGrid size={20} />,
      menuName: "Dashboard",
      role: "ADMIN",
    },
    {
      path: "/admin/create-member",
      icon: <UserPlus size={20} />,
      menuName: "Create Member",
      role: "ADMIN",
    },
    {
      path: "/admin/member/1",
      icon: <FileText size={20} />,
      menuName: "Edit Member",
      role: "ADMIN",
    },
    {
      path: "/health-info",
      icon: <MessageCircleQuestion size={20} />,
      menuName: "Health info",
      role: "MEMBER",
    },
    {
      path: "/profile",
      icon: <UserRoundPen size={20} />,
      menuName: "Complete Profile",
      role: "MEMBER",
    },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("You are logged out successfully");
      navigate("/");
    } catch (error) {
      console.log("Error logging out: ", error);
    }
  };

  return (
    <>
      {/* ========== HEADER ========== */}
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 md:ps-[260px]">
        <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
          <div className="flex grow items-center justify-between ms-auto md:justify-between gap-x-1 md:gap-x-3">
            <div className="flex flex-row items-center gap-1">
              {/* Member Profile */}
              <div className="flex items-center gap-x-3">
                <img
                  className="inline-block size-[45px] rounded-full"
                  src={
                    user.photoURL || "https://avatar.iran.liara.run/public/1"
                  }
                  alt="Avatar"
                />

                <div className="grow">
                  <h6 className="block font-medium text-gray-800 mb-0">
                    {role === "ADMIN"
                      ? "Admin"
                      : user.displayName || "Update Profile"}
                  </h6>
                  {!role.includes("ADMIN") && <Status status={status} />}
                </div>
              </div>
              {/* End Member Profile */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="ml-3 size-8 flex justify-center items-center gap-x-2   bg-primary-500 text-white rounded-lg"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="hs-application-sidebar"
                  aria-label="Toggle navigation"
                  data-hs-overlay="#hs-application-sidebar"
                >
                  <span className="sr-only">Toggle Navigation</span>
                  <Menu size="20" />
                </button>
              </div>
            </div>
          </div>
          <MemberStep />
        </nav>
      </header>
      {/* ========== END HEADER ========== */}
      {/* ========== MAIN CONTENT ========== */}
      <div className="-mt-px hidden">
        {/* Breadcrumb */}
        <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden md:ps-64">
          <div className="flex items-center py-2 md:pl-6">
            {/* Navigation Toggle */}
            <button
              type="button"
              className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="hs-application-sidebar"
              aria-label="Toggle navigation"
              data-hs-overlay="#hs-application-sidebar"
            >
              <span className="sr-only">Toggle Navigation</span>
              <PanelRightClose size={20} />
            </button>
            {/* End Navigation Toggle */}
            {/* Breadcrumb */}
            <ol className="ms-3 flex items-center whitespace-nowrap">
              <li className="flex items-center text-sm text-gray-800">
                Fit Sapiens
                <svg
                  className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </li>
              <li
                className="text-sm font-semibold text-primary-800 truncate"
                aria-current="page"
              ></li>
            </ol>
            {/* End Breadcrumb */}
          </div>
        </div>
        {/* End Breadcrumb */}
      </div>
      {/* Sidebar */}
      <div
        id="hs-application-sidebar"
        className="hs-overlay  [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all uration-300 transform w-[260px] h-full hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 md:block md:translate-x-0 md:end-auto md:bottom-0"
        role="dialog"
        tabIndex={-1}
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col h-full max-h-full">
          <div className="px-6 pt-4">
            {/* Logo */}
            <Link
              className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              to="/"
              aria-label="Preline"
            >
              <img src="/assets/logo.svg" alt="Brand Logo" />
            </Link>
            {/* End Logo */}
          </div>
          {/* Content */}
          <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <nav
              className="hs-accordion-group w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open=""
            >
              <ul className="flex flex-col space-y-1 mt-4">
                {mainMenu.map((menu, index) => {
                  if (role == menu.role) {
                    return (
                      <li key={index}>
                        <NavLink
                          className="nav-item flex items-center gap-x-3.5 py-4 px-8 hover:bg-primary-50 hover:text-primary-700 hover:border-r-4 hover:border-r-primary-700 transition-all"
                          to={menu.path}
                        >
                          {menu.icon}
                          {menu.menuName}
                        </NavLink>
                      </li>
                    );
                  }
                })}
                <button
                  className="nav-item flex items-center gap-x-3.5 py-4 px-8 hover:bg-primary-50 hover:text-primary-700 hover:border-r-4 hover:border-r-primary-700 transition-all"
                  // onClick={handleLogout}
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="hs-danger-alert"
                  data-hs-overlay="#hs-danger-alert"
                >
                  <CircleArrowOutUpLeft size={18} />
                  Logout
                </button>
              </ul>
            </nav>
          </div>
          {/* End Content */}
        </div>
      </div>
      {/* End Sidebar */}
      {/* Content */}
      <div className="w-full md:ps-64">
        <div className="max-w-[85rem] p-4 md:p-6 lg:p-14 mx-auto">
          <Outlet />
        </div>
      </div>
      {/* End Content */}
    </>
  );
}

export default DashboardLayout;
