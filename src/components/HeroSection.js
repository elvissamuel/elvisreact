import React from "react";
import heroImgDesktop from "../imgs/image-web-3-desktop.jpg";
import heroImgmobile from "../imgs/image-web-3-mobile.jpg";
import Button from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="HeroSection">
      <div className="img-container">
        <img src={heroImgDesktop} alt="heroImage" className="heroImgBig" />
        <img src={heroImgmobile} alt="heroImage" className="heroImgSmall" />
      </div>

      <div className="heroBodyContainer">
        <div className="heroHeader">
          <h1 className="heroTitle">The Bright Future of Web 3.0?</h1>
        </div>

        <div className="heroBody">
          <h4>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling it's promise?
          </h4>
          <Button name="READ MORE" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
