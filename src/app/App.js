import React from "react";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Session/Login";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/Session/NotFoundError";




function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
