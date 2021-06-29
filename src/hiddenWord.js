import { useState } from "react";
import Guess from "./guess.js";

let hiddenWord = [];

export default function Word(props) {
  const [secretWord, setSecretWord] = useState(" ");
  let wordVar = " ";

  function getInputValue() {
    //Gets the user's secret word
    wordVar = document.getElementById("hiddenWord").value;
    setSecretWord(wordVar.toUpperCase());
    makeHidden();
    console.log(hiddenWord);
  }
  function makeHidden() {
    for (let i = 0; i < wordVar.length; i++) {
      //Loop makes a word with underscores EX: Cat = _ _ _
      hiddenWord.push("_ ");
    }
  }
  if (secretWord !== " ") {
    console.log(secretWord);
    return <Guess secret={secretWord} word={hiddenWord} />;
  } else {
    return (
      <div>
        <input id="hiddenWord" placeholder="Input the word" />
        <button onClick={getInputValue}>Click Me!</button>
      </div>
    );
  }
}
