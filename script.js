const SIZE = 16;
const whiteboard = document.querySelector(".whiteboard");
const nrBoxInput = document.querySelector(".noBoxInput");
let size = SIZE;
let isClicked = false;
let boxArray = [];

for (let i = 0; i < size * size; i++) {
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

function setSize() {
  size = nrBoxInput;
}

function removeBoxes() {
  while (whiteboard.childElementCount > 0) {
    for (let i = 0; i < whiteboard.childElementCount; i++) {
      whiteboard.removeChild(whiteboard.childNodes[i])
    }
  }
}

nrBoxInput.addEventListener("keydown", (e) => {
  if (e.keyCode = 13) {
    setSize();
    removeBoxes();
  }
})

whiteboard.addEventListener("click", colorBox);
