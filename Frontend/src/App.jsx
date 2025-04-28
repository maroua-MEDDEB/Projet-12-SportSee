import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavBarVertical from "./components/NavBarVertical/NavBarVertical";
import NavBarHorizontal from "./components/NavBarHorizontal/NavBarHorizontal";
import "./App.css";
import SportResultsTraining from "./Pages/SportResultsTraining/SportResultsTraining";
function App() {
  return (
    <>
      <NavBarHorizontal />
      <NavBarVertical />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sportResults/:userId/"
          element={<SportResultsTraining />}
        />
      </Routes>
    </>
  );
}

export default App;
