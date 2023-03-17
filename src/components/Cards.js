import React from "react";
import CardItem from "./CardItem";
import cardImg1 from "../imgs/image-retro-pcs.jpg";
import cardImg2 from "../imgs/image-top-laptops.jpg";
import cardImg3 from "../imgs/image-gaming-growth.jpg";
import "./Cards.css";

function Cards() {
  return (
    <div className="Cards">
      <CardItem
        image={cardImg1}
        number="01"
        title="Reviving Retro PCs"
        description="What happens when old PCs are given modern upgrades"
      />
      <CardItem
        image={cardImg2}
        number="02"
        title="Top 10 Laptops in 2022"
        description="Our best picks for various needs and budget"
      />
      <CardItem
        image={cardImg3}
        number="03"
        title="The Growth of Gaming"
        description="How the pandemic has sparkled fresh opportunities"
      />
    </div>
  );
}

export default Cards;
