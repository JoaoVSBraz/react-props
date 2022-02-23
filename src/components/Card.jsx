import React from "react"
import Avatar from "./Avatar"
import Detail from './Detail'

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <h3>{props.id}</h3>
                <h2 className="name">{props.name}</h2>
                <Avatar imgURL={props.imgURL}/>
            </div>
            <div className="bottom">
                <Detail description={props.description}/>
            </div>
            
        </div>
    )
}

export default Card