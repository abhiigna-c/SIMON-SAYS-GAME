let gameSequence = [];
let userSequence = [];
let level = 0;
let started = false;
let btns = ["btn-red", "btn-blue", "btn-green", "btn-yellow"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function() {
    if (!started) {
      started = true;
      console.log("Game started!");

      levelUp();
    }
});

function levelUp() {
    level++;
    h2.textContent = `Level ${level}`;

    let randomIndex = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    console.log(randomColor);
    btnFlash(randomBtn);
}

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function() {
    btn.classList.remove("flash");
  }, 500);
}

function btnPress() {
  console.log("Button pressed!");
}

let buttons = document.querySelectorAll(".btn");
for(btn of buttons) {
  btn.addEventListener("click", btnPress);
}
