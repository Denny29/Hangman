import { useState } from "react";
import Guess from "./guess.js";
import Man from "./man.js";
let wordVar = " ";

export default function Word(props) {
  const [secretWord, setSecretWord] = useState(" ");

  function getInputValue() {
    wordVar = document.getElementById("hiddenWord").value;
    setSecretWord(wordVar);
  }

  if (secretWord !== " ") {
    console.log(secretWord);
    return <Guess secret={secretWord} />;
  } else {
    return (
      <div>
        <input id="hiddenWord" placeholder="Input the word" />
        <button onClick={getInputValue}>Click Me!</button>
      </div>
    );
  }
}
