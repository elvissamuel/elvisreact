import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div className="Button">
      <button className="btn">{props.name}</button>
    </div>
  );
}

export default Button;
