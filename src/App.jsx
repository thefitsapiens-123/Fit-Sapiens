import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import NotFound from "./pages/NotFound";
import Admin from "./Routes/Admin";
import Member from "./Routes/Member";
import { useEffect } from "react";
import { useLocation } from "react-router";
import "preline/preline";
function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/*" element={<Member />} />
      </Routes>
    </>
  );
}

export default App;
