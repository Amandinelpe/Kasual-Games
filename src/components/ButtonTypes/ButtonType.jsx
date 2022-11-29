import React from "react";
import ButtonItemType from "./ButtonItemType";
import DataType from "./utils/DataType";
import "./ButtonType.css";

const ButtonType = () => {
  return (
      <div className="content">
        <ul className="nav-button-list">
          {DataType.map((item, index) => {
            return <ButtonItemType key={index} data={item} />;
          })}
        </ul>
      </div>
  );
};

export default ButtonType;
