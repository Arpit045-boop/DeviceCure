import React from "react";

function Card(props) {
    return (<div>
        <img className="imgService" src={props.imgUrl}
        />
    </div>)
}

export default Card;