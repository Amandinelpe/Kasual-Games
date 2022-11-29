import React from "react";
import { useParams } from 'react-router-dom';
import Cards from "../Cards/Cards";

const Type = () => {
    const params = useParams();
    return (
        <Cards url={`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/${params.value}`} />
    );
};

export default Type;
