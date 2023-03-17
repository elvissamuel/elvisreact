import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="SideBar">
      <div className="sidebar-container">
        <h2 className="side-title">NEW</h2>
        <ul className="sidebar-body">
          <li className="body">
            <h3 className="body-title">Hydrogen VS Electric Cars</h3>
            <span className="body-desc">
              Will hydrogen-fueled cars ever catch up with EVs Cars?
            </span>
          </li>
          <li className="body">
            <h3 className="body-title">The Down-side of Al Artistry</h3>
            <span className="body-desc">
              What are the possible adverse effects of on-demand AI image
              generation?
            </span>
          </li>
          <li className="body">
            <h3 className="body-title">Is VC Funding Drying Up</h3>
            <span className="body-desc">
              Private funding by VC firms is down 50% YOY, We take a look at
              what that means.{" "}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
