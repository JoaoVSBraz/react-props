import React from "react"

function Card(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img
                src={props.imgURL}
                alt='default'
            />
            <p>{props.description}</p>
        </div>
    )
}

export default Card