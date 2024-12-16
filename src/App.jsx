import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
