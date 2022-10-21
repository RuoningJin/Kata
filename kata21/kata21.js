const prompt = require("prompt-sync")({sigint: true});
let count = 0;
let correctAnswer = false;
const expected = Math.floor(Math.random() * 100 + 1);
let previous;
while (!correctAnswer) {
  let answer = prompt("Guess a number: ");
  answer = Number(answer);
  if (answer === expected) {
    count++;
    console.log(`You got it! You took ${count} attempts!`);
    correctAnswer = true;
  } else if (answer === previous) {
    count++;
    previous = answer;
    console.log("Already Guessed!");
  } else if (isNaN(answer)) {
    count++;
    previous = answer;
    console.log("Not a Number! Try again!");
  } else if (answer < expected) {
    count++;
    previous = answer;
    console.log("Too Low!");
  } else if (answer > expected) {
    count++;
    previous = answer;
    console.log("Too High!");
  }
}

