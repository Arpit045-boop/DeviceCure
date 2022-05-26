import React from "react";

function QualityCard(props) {
    return (<>
        <img className="imgQuality" src={ props.img} />
        <h3>{props.name}</h3>
        <p>{props.desc}</p>

    </>)
}

export default QualityCard;