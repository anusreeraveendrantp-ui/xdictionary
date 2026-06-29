import React, { useState } from "react";

export default function Dictionary() {
  const [inputWord, setInputWord] = useState("");
  const [definition, setDefinition] = useState("");

  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces."
    },
    {
      word: "Component",
      meaning: "A reusable building block in React."
    },
    {
      word: "State",
      meaning: "An object that stores data for a component."
    }
  ];

  const handleSearch = () => {
    const foundWord = dictionary.find(
      item => item.word.toLowerCase() === inputWord.trim().toLowerCase()
    );

    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>

      <input
        type="text"
        value={inputWord}
        placeholder="Search for a word"
        onChange={(e) => setInputWord(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <h3>Definition:</h3>
      <p>{definition}</p>
    </div>
  );
}
