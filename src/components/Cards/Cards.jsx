import React from "react";
import CardsItem from "./CardsItem/CardsItem";
import "./Cards.css";

const Card = (props) => {
  const { cards } = props;

  return (
    <div className="container">
      {cards
        .filter((card) => card.img && card.imgGold)
        .slice(0, 10)
        .map((card) => (
          <CardsItem key={card.cardId} card={card} />
        ))}
    </div>
  );
};

export default Card;
