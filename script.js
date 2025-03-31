//your JS code here. If required.
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let inputBox = document.querySelector(".input-box");
let gridContainer = document.querySelector(".grid-container");
let submitElement = document.getElementById("submit");
let boxes = document.querySelectorAll(".box");
let msgElement = document.querySelector(".message");
let turn0 = true;
let player1Name;
let player2Name;

submitElement.addEventListener("click", () => {
   player1Name = player1.value;
   player2Name = player2.value;
  inputBox.style.display = "none";
  gridContainer.style.display = "grid";
  msgElement.textContent = `${player1Name} your turn`;
});

boxes.forEach((box) => {
   player1Name = player1.value;
   player2Name = player2.value;
  box.addEventListener("click", () => {
    if (box.textContent !== "") return;
    if (turn0) {
      msgElement.textContent = `${player2Name} your turn`;
      box.textContent = "O";
    } else {
      msgElement.textContent = `${player1Name} your turn`;
      box.textContent = "X";
    }
    turn0 = !turn0;
    checkWinner();
  });
});

const checkWinner = () => {
   player1Name = player1.value;
   player2Name = player2.value;
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].textContent;
    let pos2Val = boxes[pattern[1]].textContent;
    let pos3Val = boxes[pattern[2]].textContent;
    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val == pos3Val) {
        if (pos1Val === "O")
          msgElement.textContent = `${player1Name} Congratulation, You won!`;
        else msgElement.textContent = `${player2Name} Congratulation, You won!`;
		    boxes[pattern[0]].classList.add("winning");
	        boxes[pattern[1]].classList.add("winning");
	        boxes[pattern[2]].classList.add("winning");
      }
    }
  }
};

const disableBoxex = () => {
  for (let box of boxes) {
    box.style.pointerEvents = "none";
  }
};
