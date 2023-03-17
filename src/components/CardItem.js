import React from "react";
import "./CardItem.css";

export default function CardItem(props) {
  return (
    <div>
      <div className="Card">
        <div className="card-container">
          <div className="card-img-container">
            <img src={props.image} alt="card-image" className="card" />
          </div>
          <div className="card-body">
            <h1 className="card-number">{props.number}</h1>
            <h4 className="card-title">{props.title}</h4>
            <span className="card-description">{props.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
