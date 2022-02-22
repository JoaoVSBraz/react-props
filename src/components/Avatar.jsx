import React from "react"

function Avatar(props) {
    return (
        <img
            className="circle-img"
            src={props.imgURL}
            alt='default'
        />
    )
}

export default Avatar