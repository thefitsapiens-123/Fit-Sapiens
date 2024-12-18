import React, { useRef } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import NotFound from "./pages/NotFound";
import Admin from "./Routes/Admin";
import Member from "./Routes/Member";
import { useEffect } from "react";
import { useLocation } from "react-router";
import TopLoadingBar from "react-top-loading-bar";

import "preline/preline";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  const loadingBarRef = useRef(null);
  useEffect(() => {
    const handleStart = () => loadingBarRef.current.continuousStart();
    const handleFinish = () => loadingBarRef.current.complete();

    handleStart();
    const timer = setTimeout(handleFinish, 300);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <TopLoadingBar
        ref={loadingBarRef}
        color="#b91c1c"
        height={3}
        fixed={true}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/*" element={<Member />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
