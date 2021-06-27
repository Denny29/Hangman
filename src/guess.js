import { useState } from "react";
let guessVar = " ";
let hiddenWord;
export default function Guess(props) {
  const [pastGuess, setPastGuess] = useState([]);
  hiddenWord = props.word;
  const [hidden, setHidden] = useState(hiddenWord);

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
        console.log(true + hidden);
        // console.log(true + " secretLetter: " + props.secret[i2]);
      } else {
        console.log(false + " secretLetter: " + props.secret[i2]);
      }
    }
  }

  return (
    <div>
      <p> {hidden} </p>
      <div>
        <input id="guess" placeholder="Guess a letter" />
        <button onClick={guessFunc}>Click Me</button>
      </div>
      <h2>Guessed letters: {pastGuess} </h2>
    </div>
  );
}
