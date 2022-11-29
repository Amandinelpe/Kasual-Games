import React from "react";
import "./CardsItem.css";

const CardsItem = (props) => {
  const { card } = props;
  return (
    <div className="cards">
      <div className="name">
        <h2>{card.name}</h2>
      </div>
      <div className="content-cards">
        <div className="image">
          <img src={card.img} alt="img" />
        </div>
        <div className="type">
          <p>{card.type} </p>
        </div>
        <div className="description">
          <div className="faction">
            <div>
              <p>Faction</p>
            </div>
            <div>
              <p>{card.faction ?? "-"}</p>
            </div>
          </div>
          <div className="class">
            <div>
              <p>Class</p>
            </div>
            <div>
              <p>{card.playerClass ?? "-"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsItem;
