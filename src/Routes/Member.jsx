import React from "react";
import { Route, Routes } from "react-router";
import HelthDetails from "../pages/HelthDetails";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import DashboardLayout from "../layout/Dashboard";

function Member() {
  return (
    <>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/health-info" element={<HelthDetails />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Member;
