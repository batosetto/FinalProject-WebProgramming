import React from "react";
import "./Styles.scss";
import airplane from "./pictures/airplane.png";

export default function Header(){
    return(
        <div className="header">
            <h1 className="header">Trip Planner</h1>
            <img className="myHeaderImageStyle " src={airplane} alt="airplane"/>
        </div>
    )
}