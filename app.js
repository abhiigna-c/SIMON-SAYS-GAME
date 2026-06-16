let gameSequence = [];
let userSequence = [];

let level = 0;
let started = false;

let btns = ["red", "blue", "green", "yellow"];

let h2 = document.querySelector("h2");

// Start game
document.addEventListener("keypress", function () {
  if (!started) {
    started = true;
    levelUp();
  }
});

// Generate next sequence
function levelUp() {
  userSequence = [];

  level++;
  h2.textContent = `Level ${level}`;

  let randomIndex = Math.floor(Math.random() * btns.length);
  let randomColor = btns[randomIndex];

  gameSequence.push(randomColor);

  let randomBtn = document.querySelector(`#${randomColor}`);
  btnFlash(randomBtn);

  console.log("Game Sequence:", gameSequence);
}

// Flash game button
function btnFlash(btn) {
  btn.classList.add("flash");

  setTimeout(() => {
    btn.classList.remove("flash");
  }, 500);
}

// Flash user click
function userFlash(btn) {
  btn.classList.add("userFlash");

  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 250);
}

// Check latest answer
function checkAnswer(currentIndex) {
  if (userSequence[currentIndex] === gameSequence[currentIndex]) {
    // User completed current level
    if (userSequence.length === gameSequence.length) {
      setTimeout(() => {
        levelUp();
      }, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to restart`;

    document.body.classList.add("flash");

    setTimeout(() => {
      document.body.classList.remove("flash");
    }, 200);

    resetGame();
  }
}

// Handle button click
function btnPress() {
  let btn = this;

  userFlash(btn);

  let userColor = btn.id;
  userSequence.push(userColor);

  let currentIndex = userSequence.length - 1;

  checkAnswer(currentIndex);
}

// Reset game
function resetGame() {
  started = false;
  level = 0;
  gameSequence = [];
  userSequence = [];
  
}

// Add click listeners
let buttons = document.querySelectorAll(".btn");

for (let btn of buttons) {
  btn.addEventListener("click", btnPress);
}