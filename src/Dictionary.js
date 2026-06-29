import React, { useState } from 'react';

export default function Dictionary() {

    const [inputWord, setInputWord] = useState("");
    const [definition, setDefinition] = useState("");

    const dictionary = 
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]

const handleSearch = (e) => {
    //alert("Search button ok");     
    e.preventDefault();
    if (inputWord.trim() === "") {
            setDefinition("Word not found in the dictionary.");
            return;
        }
    const foundWord = dictionary.find(word => word.word.toLowerCase() === inputWord.toLowerCase());
 //   alert("Found word: " + JSON.stringify(foundWord));
    if (foundWord) {
        setDefinition(foundWord.meaning);
   //     alert("Definition: " + foundWord.meaning);
    } else {
        setDefinition("Word not found in the dictionary.");
    }
}

    return (
        <div>
            <h1 style={{marginBottom:"10px"}}>Dictionary App</h1>
            <input type ="text" placeholder ="search for a word"  onChange={(e) => setInputWord(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <h3>Definition:</h3>
            <p>{definition}</p>
        </div>
    )
  }