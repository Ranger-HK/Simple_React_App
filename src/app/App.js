import React from "react";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Session/Login";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/Session/NotFoundError";
import FlexBoxLayout from "../pages/Layout/FlexBox";
import GridBoxLayout from "../pages/Layout/Grid";





function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="flex" element={<FlexBoxLayout/>} />
      <Route path="grid" element={<GridBoxLayout/>} />
      {/*<Route path="*" element={<NotFound />} />*/}
    </Routes>
  );
}

export default App;
