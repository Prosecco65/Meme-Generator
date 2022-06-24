import React from "react";
import Uwu from "./images/uwu.png"  //per importare le immagini

export default function Header(){
    return(
        <heater className="Css">
            <img src={Uwu} className="Css--image"/>
            <h2 className="Css--title">Meme Generator</h2>
            <h4 className="Css--project">Progetto 3</h4>
        </heater>
    ) 
}