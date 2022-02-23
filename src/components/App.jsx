import React from "react"
import contacts from "../contacts"
import Card from "./Card"
import Avatar from "./Avatar"

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar imgURL="https://avatars.githubusercontent.com/u/32749482?v=4" />
            {contacts.map((document) => {
                return (
                    <Card
                        id={document.id}
                        key={document.id}
                        name={document.name} 
                        imgURL={document.imgURL} 
                        description={document.description}/>
                )
            })}
        </div>
    )
}

export default App