import React from "react";
import { Route, Routes } from "react-router";
import HelthDetails from "../pages/HelthDetails";
import Profile from "../pages/Profile";

function Member() {
  return (
    <>
      <Routes>
        <Route path="/helth-info" element={<HelthDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default Member;
