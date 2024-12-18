import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "../pages/Dashboard";
import CreateAdmin from "../pages/CreateAdmin";
import Member from "../pages/Member";

function Admin() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-admin" element={<CreateAdmin />} />
        <Route path="/member/:id" element={<Member />} />
      </Routes>
    </>
  );
}

export default Admin;
