import { useState } from "react";
let guessVar = " ";

export default function Guess(props) {
  const [pastGuess, setPastGuess] = useState([]);

  function guessFunc() {
    guessVar = document.getElementById("guess").value;
    setPastGuess(pastGuess + " " + guessVar);
    checkGuess();
  }
  function checkGuess(par) {
    //checks if the guessed letter is equal to any letter in secret word
    for (let i2 = 0; i2 < props.secret.length; i2++) {
      if (props.secret[i2] === guessVar) {
        console.log(true + " secretLetter: " + props.secret[i2]);
      } else {
        console.log(false + " secretLetter: " + props.secret[i2]);
      }
    }
  }

  let wordArray = props.secret.split("");
  let hiddenWord = "";

  for (let i = 1; i <= wordArray.length; i++) {
    //Loop makes a word with underscores EX: Cat = _ _ _
    hiddenWord += " _";
  }

  return (
    <div>
      {hiddenWord}{" "}
      <div>
        <input id="guess" placeholder="Guess a letter" />
        <button onClick={guessFunc}>Click Me</button>
      </div>
      <h2>Guessed letters: {pastGuess} </h2>
    </div>
  );
}
