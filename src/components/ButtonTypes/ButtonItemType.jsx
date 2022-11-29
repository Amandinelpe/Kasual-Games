import React from "react";
import { Link } from "react-router-dom";
import "./ButtonItemType.css";

const ButtonTypes = (props) => {
  const { data } = props;

  return (
    <li>
      <Link className="type-button-link" to={data.link}>
        <button className="type-button">
          <p>{data.name}</p>
        </button>
      </Link>
    </li>
  );
};

export default ButtonTypes;
