import {
  CircleAlert,
  FileText,
  LayoutGrid,
  MessageCircleQuestion,
  PanelRightClose,
  UserPlus,
  UserRoundPen,
} from "lucide-react";
import React from "react";
import { Link } from "react-router";
import MemberTable from "../components/MemberTable";

function DashboardLayout() {
  const menu = [
    "admin/dashboard",
    "admin/member/1",
    "admin/create-admin",
    "/helth-info",
    "/profile",
  ];

  return (
    <>
      {/* ========== HEADER ========== */}
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 md:ps-[260px]">
        <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
          <div className="me-5 md:me-0 md:hidden">
            {/* Logo */}
            <a
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="#"
              aria-label="Preline"
            >
              <img src="/assets/logo.svg" alt="Brand Logo" />
            </a>
            {/* End Logo */}
          </div>
          <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3">
            <div className="hidden sm:block">
              {/* Search Input */}
              <h2 className="text-xl font-semibold text-gray-800 mb-0">
                List of members
              </h2>
              <p className="text-sm text-gray-600">
                Add member, edit and more.
              </p>
              {/* End Search Input */}
            </div>
            <div className="flex flex-row items-center justify-end gap-1">
              {/* Dropdown */}
              <div className="flex items-center gap-x-3">
                <div className="grow text-right">
                  <h6 className="block font-medium text-gray-800 mb-0">
                    Christina Bersh
                  </h6>
                  <span className="inline-flex items-center gap-1 p-1 px-2 text-yellow-700 bg-yellow-200 text-xs rounded-full">
                    <CircleAlert size={10} /> Incomplete
                  </span>
                </div>
                <img
                  className="inline-block size-[45px] rounded-full"
                  src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
              </div>

              {/* End Dropdown */}
            </div>
          </div>
        </nav>
      </header>
      {/* ========== END HEADER ========== */}
      {/* ========== MAIN CONTENT ========== */}
      <div className="-mt-px">
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
              >
                Dashboard
              </li>
            </ol>
            {/* End Breadcrumb */}
          </div>
        </div>
        {/* End Breadcrumb */}
      </div>
      {/* Sidebar */}
      <div
        id="hs-application-sidebar"
        className="hs-overlay  [--auto-close:lg]
  hs-overlay-open:translate-x-0
  -translate-x-full transition-all duration-300 transform
  w-[260px] h-full
  hidden
  fixed inset-y-0 start-0 z-[60]
  bg-white border-e border-gray-200
  md:block md:translate-x-0 md:end-auto md:bottom-0
 "
        role="dialog"
        tabIndex={-1}
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col h-full max-h-full">
          <div className="px-6 pt-4">
            {/* Logo */}
            <a
              className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="#"
              aria-label="Preline"
            >
              <img src="/assets/logo.svg" alt="Brand Logo" />
            </a>
            {/* End Logo */}
          </div>
          {/* Content */}
          <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <nav
              className="hs-accordion-group w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open=""
            >
              <ul className="flex flex-col space-y-1 mt-4">
                <li>
                  <a
                    className="nav-item flex items-center gap-x-3.5 py-4 px-8 bg-primary-50 text-primary-700 border-r-4 border-r-primary-700"
                    href="#"
                  >
                    <LayoutGrid color="#b91c1c" />
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    className="nav-item text-gray-800 flex transition-all items-center gap-x-3.5 py-4 px-8 focus:bg-primary-50 focus:text-primary-700 focus:border-r-4 focus:border-r-primary-700"
                    href="#"
                  >
                    <UserPlus />
                    Create Member
                  </a>
                </li>
                <li>
                  <a
                    className="nav-item text-gray-800 flex transition-all items-center gap-x-3.5 py-4 px-8 focus:bg-primary-50 focus:text-primary-700 focus:border-r-4 focus:border-r-primary-700"
                    href="#"
                  >
                    <FileText />
                    Edit User
                  </a>
                </li>
                <li>
                  <a
                    className="nav-item text-gray-800 flex transition-all items-center gap-x-3.5 py-4 px-8 focus:bg-primary-50 focus:text-primary-700 focus:border-r-4 focus:border-r-primary-700"
                    href="#"
                  >
                    <MessageCircleQuestion />
                    Helth Info
                  </a>
                </li>
                <li>
                  <a
                    className="nav-item text-gray-800 flex transition-all items-center gap-x-3.5 py-4 px-8 focus:bg-primary-50 focus:text-primary-700 focus:border-r-4 focus:border-r-primary-700"
                    href="#"
                  >
                    <UserRoundPen />
                    Complete Profile
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* End Content */}
        </div>
      </div>
      {/* End Sidebar */}
      {/* Content */}
      <div className="w-full md:ps-64">
        <MemberTable />
      </div>
      {/* End Content */}
    </>
  );
}

export default DashboardLayout;
