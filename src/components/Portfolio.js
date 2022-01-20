import React from "react";
import {useParams} from "react-router-dom";

const Portfolio = () => {

    console.log(useParams().id);

    const id = useParams().id;

    return (
        <div>
            Portfolio Page.

            {useParams().id && <p>The id is {id}</p>}
        </div>

    );
};




export default Portfolio;