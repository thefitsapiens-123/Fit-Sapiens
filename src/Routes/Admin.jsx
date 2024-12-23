import React from "react";
import { Route, Routes, useOutletContext } from "react-router";
import Dashboard from "../pages/Dashboard";
import CreateAdmin from "../pages/CreateAdmin";
import Member from "../pages/Member";
import NotFound from "../pages/NotFound";
import DashboardLayout from "../layout/Dashboard";

function Admin() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="create-member" element={<CreateAdmin />} />
        <Route path="member/:id" element={<Member />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Admin;
