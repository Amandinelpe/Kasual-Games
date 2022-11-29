import React from "react";
import picto from "../../assets/Logo.png";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <img src={picto} className="App-logo" alt="picto" />
    </div>
  );
};

export default Loading;
