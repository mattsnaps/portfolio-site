import React from "react";
import {Link, useParams} from "react-router-dom";


const Portfolio = () => {

    return (
        <div>
            <h1>My Work</h1>
            <p>Check out the stuff I've done</p>
            <Link to={"/portfolio/1"}>ItemOne</Link>
            <Link to={"/portfolio/2"}>ItemTwo</Link>
            <Link to={"/portfolio/3"}>ItemThree</Link>
            <Link to={"/portfolio/4"}>ItemFour</Link>

        </div>

    );
};




export default Portfolio;