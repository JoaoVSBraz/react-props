import React from "react"
import Avatar from "./Avatar"

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <Avatar imgURL={props.imgURL}/>
            </div>
            <div className="bottom">
                <p className="info">{props.description}</p>
            </div>
            
        </div>
    )
}

export default Card