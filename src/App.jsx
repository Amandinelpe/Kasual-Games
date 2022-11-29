import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Mention from "./components/Mentions/Mention";
import Types from "./components/Types/Types";
import Type from "./components/Type/Type";
import Search from "./components/Search/Search";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/types" element={<Types />} />
          <Route path="/mentions" element={<Mention />} />
          <Route path="/type/:value" element={<Type />} />
          <Route path="/search/:value" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
