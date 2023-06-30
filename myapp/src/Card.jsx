import React from "react";
import Avatar from "./components/Avatar";

function Card(props){
    return (
    <div className="cardd">
        <div className="top">
        <h1 className="name">{props.name}</h1>
        <img className="circle-img" src={props.img}></img>
        </div>
        <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
        </div>

    </div>
    )
}

export default Card;