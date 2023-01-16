const whiteboard = document.querySelector(".whiteboard");
const nrBoxInput = document.querySelector(".noBoxInput");
let isClicked = false;
let boxArray = [];

for (let i = 0; i < 256; i++) {
  createBox();
}

// FUNCTIONS

function createBox() {
  const div = document.createElement("div");
  div.classList.add("box");
  whiteboard.appendChild(div);
  boxArray.push(div);
}

function colorBox() {
  isClicked = true;
  if (isClicked) {
    for (let i = 0; i < boxArray.length; i++) {
      boxArray[i].addEventListener(
        "mouseenter",
        () => (boxArray[i].style.backgroundColor = "black")
      );
    }
  }
}

whiteboard.addEventListener("click", colorBox);
