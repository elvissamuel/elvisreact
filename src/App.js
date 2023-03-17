import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import SideBar from "./components/SideBar";
import Popular from "./components/Pages/Popular";
import Home from "./components/Pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
