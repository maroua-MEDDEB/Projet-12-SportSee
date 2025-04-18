import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavBarHorizontal from "../../ancien frontend/src/components/NavBarHorizontal/NavBarHorizontal";
import NavBarVertical from "../../ancien frontend/src/components/NavBarVertical/NavBarVertical";
import "./App.css";
function App() {
  return (
    <>
      <NavBarHorizontal />
      <NavBarVertical />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
