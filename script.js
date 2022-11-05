"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);

const message = document.querySelector(".message").textContent;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔️ No Number!");
    /* ------------------------------------------------ GUESS IS CORRECT ------------------------------------------------ */
  } else if (guess === secretNumber) {
    displayMessage("🎊 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = " #71C857";

    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").style.backgroundColor = " #DE327A";

    document.querySelector(".guess").style.border = " 4px solid #DE327A";
    document.querySelector(".check").style.backgroundColor = "#DE327A";

    document.querySelector(".guess").style.backgroundColor = "#DE327A";
    document.querySelector(".guess").style.color = "#333";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    /* ------------------------------------------------ GUESS IS WRONG ------------------------------------------------ */
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? "Too High! 👇🏼" : "Too Low! ☝🏼");
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game! 😭");
    }
  }
});

/* ------------------------------------------------ NEW GAME (AGAIN BUTTON) ------------------------------------------------ */

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage("Start Guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";

  document.querySelector("body").style.backgroundColor = " #222";

  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").style.backgroundColor = " #eee";

  document.querySelector(".guess").style.border = " 4px solid #eee";
  document.querySelector(".check").style.backgroundColor = "#eee";

  document.querySelector(".guess").style.backgroundColor = "#222";

  document.querySelector(".guess").style.color = "#eee";
});
