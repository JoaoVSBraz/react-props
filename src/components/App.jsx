import React from "react";
import contacts from "../contacts";
import Card from "./Card";

function App() {
    return (
        <div>
            <h1>My Contacts</h1>
            <Card 
            name={contacts[0].name} 
            imgURL={contacts[0].imgURL} 
            description={contacts[0].description}/>
            <Card 
            name={contacts[1].name} 
            imgURL={contacts[1].imgURL}
            description={contacts[1].description}/>
            <Card 
            name={contacts[2].name} 
            imgURL={contacts[2].imgURL} 
            description={contacts[2].description}/>
        </div>
    )
}

export default App