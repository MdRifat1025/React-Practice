import React from "react";
import "./Card.css";
import data from "./data.json";

function Card(props) {
    let items = [];
    for (let i = 0; i < data.length; i++) {
        items.push(
            <div className="Card">
                <h2 className="title">{data[i].title}</h2>
                <p className="content">{data[i].content}</p>
                <button className="btn">Click ME</button>
            </div>
        )
    }


    return (

        <div>
            {items}
        </div>



    );
}

export default Card;