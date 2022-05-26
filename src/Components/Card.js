import React from "react";

function Card(props) {
    return (<>
        <h3>{props.services}</h3>
        <img className="imgService" src={props.imgUrl}
        />
    </>)
}

export default Card;