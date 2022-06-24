import React from "react";
import memesData from "./memesData";
import Hamburger from "./images/hamburger.png"

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage:Hamburger
    })

    const [allMemeimages, setAllImags] = React.useState(memesData)
    
    function GetMemeImage() {
        const memesArray = memesData.data.memes
        const r = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memesArray[r].url
        }))
    }

    function handleChange(event)
    {
        const{name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <main>
            <div className="Meme">
                <input type="text" className="Meme--input" placeholder="Top Text" name="topText" value={meme.topText} onChange={handleChange}/>
                <input type="text" className="Meme--input" placeholder="Bottom Text" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
                <button className="meme--button" onClick={GetMemeImage}> Inserisci il template</button>
            </div>
            <div className="uga">
                <img src={meme.randomImage} className="Meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}