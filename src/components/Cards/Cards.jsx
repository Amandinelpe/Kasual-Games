import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import CardsItem from "./CardsItem/CardsItem";
import "./Cards.css";

const Cards = (props) => {
  const { url } = props;
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [showNoCardsMessage, setShowNoCardsMessage] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, {
        headers: {
          "x-rapidapi-key":
            "f120b23eeemsh1315e82b38593b4p19705fjsna43ab466df03",
          "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
      })
      .then((response) => {
        setLoading(false);
        var cardsResponseWithImage = response.data.filter(
          (card) => card.img && card.imgGold
        );
        cardsResponseWithImage.length === 0
          ? setShowNoCardsMessage(true)
          : setCards(cardsResponseWithImage);
      })
      .catch(() => {
        setLoading(false);
        setShowNoCardsMessage(true);
      });
  }, [url]);

  return (
    <div className="container" whileHover={{ scale: 1.1 }}>
      {loading ? (
        <Loading />
      ) : showNoCardsMessage ? (
        <div className="no-card-found">
          <p>No cards found</p>
        </div>
      ) : (
        cards
          .slice(0, 10)
          .map((card) => <CardsItem key={card.cardId} card={card} />)
      )}
    </div>
  );
};

export default Cards;
