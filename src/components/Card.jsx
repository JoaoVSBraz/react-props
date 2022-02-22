import React from "react"

function Card(props) {
    return (
        <div>
            <div>
                <h2>{props.name}</h2>
                <img
                    src={props.imgURL}
                    alt='default'
                />
            </div>
            <div>
                <p>{props.description}</p>
            </div>
            
        </div>
    )
}

export default Card