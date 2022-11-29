import React from "react";
import NavbarItemButton from "../NavBarItemButton/NavbarItemButton";
import DataNavbarButton from "./utils/DataNavbarButton";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>KASUAL GAMES</h1>
      </div>
      <div className="content">
        <ul className="nav-button-list">
          {DataNavbarButton.map((item, index) => {
            return <NavbarItemButton key={index} data={item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
