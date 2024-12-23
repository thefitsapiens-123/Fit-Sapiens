import React, { useRef, useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Admin from "./Routes/Admin";
import Member from "./Routes/Member";
import TopLoadingBar from "react-top-loading-bar";
import "react-toastify/dist/ReactToastify.css";
import "preline/preline";
import { ToastContainer } from "react-toastify";
import useAuth, { AuthProvider } from "./context/AuthProvider";
import ProtectedRoute from "./context/ProtectedRoutes";
import Unauthorized from "./pages/Unauthorized";

function App() {
  const location = useLocation();
  const auth = useAuth();
  const user = auth ? auth.user : null;
  const role = auth ? auth.role : localStorage.getItem("userRole");
  const loading = auth ? auth.role : false;

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
    <AuthProvider>
      <ToastContainer />
      <TopLoadingBar
        ref={loadingBarRef}
        color="#b91c1c"
        height={3}
        fixed={true}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/*" element={<Admin />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["member"]} />}>
          <Route path="/*" element={<Member />} />
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
