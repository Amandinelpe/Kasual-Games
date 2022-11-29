import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonItemType from "./ButtonItemType";
import Loading from "../Loading/Loading";
import "./Types.css";

const Types = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState();

  useEffect(() => {
    axios
      .get("https://omgvamp-hearthstone-v1.p.rapidapi.com/info", {
        headers: {
          "x-rapidapi-key":
            "f120b23eeemsh1315e82b38593b4p19705fjsna43ab466df03",
          "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
      })
      .then((response) => {
        setLoading(false);
        setInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <ul className="nav-button-list">
            {info.types.map((item, index) => {
              return <ButtonItemType key={index} data={item} />;
            })}
          </ul>
        )}
      </div>
  );
};

export default Types;
