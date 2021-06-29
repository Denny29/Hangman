import { useState } from "react";
import Man from "./man.js";

let guessVar = " ";
let hiddenWord;
let isTrue;
export default function Guess(props) {
  const [pastGuess, setPastGuess] = useState([]);
  hiddenWord = props.word;
  const [hidden, setHidden] = useState(props.word);
  const [fail, setFail] = useState(0);

  function guessFunc() {
    guessVar = document.getElementById("guess").value;
    guessVar = guessVar.toUpperCase();
    setPastGuess(pastGuess + " " + guessVar);
    checkGuess();
  }

  function checkGuess() {
    //checks if the guessed letter is equal to any letter in secret word
    for (let i2 = 0; i2 < props.secret.length; i2++) {
      if (props.secret[i2] === guessVar) {
        hiddenWord[i2] = guessVar;
        setHidden(hiddenWord);
        isTrue = true;
      }
    }
    if (isTrue !== true) {
      setFail(fail + 1);
    }
    isTrue = false;
    checkWin();
  }
  function checkWin() {
    //Checks if player won or lost
    if (hiddenWord.join("") === props.secret) {
      setTimeout(winAlert, 100);
    } else if (fail === 5) {
      setTimeout(loseAlert, 100);
    }
  }
  function loseAlert() {
    alert("You lose!");
  }
  function winAlert() {
    alert("You Win!");
  }

  return (
    <div>
      <p> {hidden.join(" ")} </p>
      <div id="hangmanPic">
        <Man counter={fail} />
      </div>
      <div>
        <input id="guess" placeholder="Guess a letter" />
        <button onClick={guessFunc}>Click Me</button>
      </div>
      <h2>Guessed letters: {pastGuess} </h2>
    </div>
  );
}
