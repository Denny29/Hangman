import man0 from "./pics/hangman0.png";
import man1 from "./pics/hangman1.png";
import man2 from "./pics/hangman2.png";
import man3 from "./pics/hangman3.png";
import man4 from "./pics/hangman4.png";
import man5 from "./pics/hangman5.png";
import man6 from "./pics/hangman6.png";

let hangman;

export default function Man(props) {
  if (props.counter === 0) {
    hangman = man0;
  } else if (props.counter === 1) {
    hangman = man1;
  } else if (props.counter === 2) {
    hangman = man2;
  } else if (props.counter === 3) {
    hangman = man3;
  } else if (props.counter === 4) {
    hangman = man4;
  } else if (props.counter === 5) {
    hangman = man5;
  } else if (props.counter === 6) {
    hangman = man6;
  }
  return <img src={hangman} alt="hangman" />;
}
