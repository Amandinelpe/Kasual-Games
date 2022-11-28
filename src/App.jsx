import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home/Home";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import Mention from "./components/Mentions/Mention";

import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/Hero", {
        headers: {
          "x-rapidapi-key":
            "f120b23eeemsh1315e82b38593b4p19705fjsna43ab466df03",
          "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
      })
      .then((response) => {
        setLoading(false);
        setCards(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cards" element={<Cards cards={cards} />} />
            <Route path="/Mentions" element={<Mention />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
