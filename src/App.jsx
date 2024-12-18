import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import NotFound from "./pages/NotFound";
import Admin from "./Routes/Admin";
import Member from "./Routes/Member";
import { useEffect } from "react";
import { useLocation } from "react-router";
import "preline/preline";
import DashboardLayout from "./layout/Dashboard";
function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/*" element={<Member />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
