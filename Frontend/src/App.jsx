import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavBarVertical from "./components/NavBarVertical/NavBarVertical";
import NavBarHorizontal from "./components/NavBarHorizontal/NavBarHorizontal";
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
