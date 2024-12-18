import React from "react";
import { Route, Routes, useOutletContext } from "react-router";
import Dashboard from "../pages/Dashboard";
import CreateAdmin from "../pages/CreateAdmin";
import Member from "../pages/Member";
import NotFound from "../pages/NotFound";
import DashboardLayout from "../layout/Dashboard";

function PageWithTitle({ title, Component }) {
  const context = useOutletContext();
  return <Component context={{ ...context, pageTitle: title }} />;
}

function Admin() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route
          path="dashboard"
          element={<PageWithTitle title="Dashboard" Component={Dashboard} />}
        />
        <Route
          path="create-member"
          element={
            <PageWithTitle title="Create Member" Component={CreateAdmin} />
          }
        />
        <Route
          path="member/:id"
          element={<PageWithTitle title="Member Details" Component={Member} />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Admin;
