import React from "react";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import SideBar from "../SideBar";
import "../../App.css";
// import "./Home.css";

function Home() {
  return (
    <div>
      <div className="app-wrap">
        <HeroSection />
        <SideBar />
      </div>
      <Cards />
    </div>
  );
}

export default Home;
