import React from "react";

function WorkCard(props) {
    return (<div className="workCardNew">
        <img className="imgWork" src={props.img} />
        <h3>{props.heading}</h3>
        <p>{ props.desc}</p>
    </div>)
}

export default WorkCard
