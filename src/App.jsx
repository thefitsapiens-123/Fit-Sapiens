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
import Loading from "./components/loading";

function App() {
  const location = useLocation();
  const { user, role, loading, status } = useAuth();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname, loading, role]);

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
      <ToastContainer />
      <TopLoadingBar
        ref={loadingBarRef}
        color="#b91c1c"
        height={3}
        fixed={true}
      />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                role === "ADMIN" ? (
                  <Navigate to="/admin/dashboard" />
                ) : (
                  <Navigate to="/health-info" />
                )
              ) : (
                <Home />
              )
            }
          />
          <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
            <Route path="/admin/*" element={<Admin />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={["MEMBER"]} />}>
            <Route path="/*" element={<Member />} />
          </Route>
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
}

export default App;
