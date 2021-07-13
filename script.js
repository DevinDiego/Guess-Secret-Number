"use strict";

let randNum = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

// Display .message messages
function displayMessageMessage(message) {
  document.querySelector(".message").textContent = message;
}
// Display .number messages
function displayMessageNumber(message) {
  document.querySelector(".number").textContent = message;
}
// Display .score messages
function displayMessageScore(message) {
  document.querySelector(".score").textContent = message;
}

// Display other class messages
function displayMessageOther(targetClass, message) {
  document.querySelector(targetClass).textContent = message;
}

// Guess button EventListener
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // If invalid input.
  if (!guess) {
    displayMessageMessage("❌ Not a valid number");

    // If number guessed correctly, game won.
  } else if (guess === randNum) {
    displayMessageMessage("✅ Correct Number! ✅");
    displayMessageNumber(randNum);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // Assign high score
    if (score > highScore) {
      highScore = score;
      displayMessageOther(".highscore", highScore);
    }

    // If guess is too high or too low.
  } else if (guess !== randNum && score > 1) {
    displayMessageMessage(guess > randNum ? "Too High!" : "Tow Low!");
    score--;
    displayMessageScore(score);
  } else {
    displayMessageMessage("You Lost!");
    displayMessageScore("0");
  }
});

// Refresh values except highscore and play again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randNum = Math.floor(Math.random() * 20) + 1;
  displayMessageMessage("Start guessing...");
  displayMessageScore(score);
  displayMessageNumber("?");
  document.querySelector(".guess").value = "0";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
