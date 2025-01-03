import React, { useEffect, useState } from "react";

function Loading({ adminCreate }) {
  return (
    <div
      className={`min-h-screen bg-neutral-700 flex items-center justify-center p-4 ${
        adminCreate ? "loadingActive" : ""
      }`}
      id="main_loading"
    >
      <div className="text-center">
        <img
          src="/assets/white-logo.png"
          alt="logo"
          className="max-w-[200px] m-auto"
        />
        <div className="flex items-center gap-4 self-center justify-center">
          <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
          <h2 className="m-0 text-xl font-semibold text-gray-100">
            Loading...
          </h2>
        </div>
        <p className="mt-2 .text-neutral-50">
          Please wait while we prepare your content
        </p>
      </div>
    </div>
  );
}
export default Loading;
