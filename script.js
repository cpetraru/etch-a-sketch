const SIZE = 16;
const whiteboard = document.querySelector(".whiteboard");
const nrBoxInput = document.querySelector(".noBoxInput");
const addBoxesBtn = document.querySelector("#addBoxes");
let boxSize = SIZE;
let wbSize = "";
let isClicked = false;
let boxArray = [];

// FUNCTIONS

function setWhiteboardSize() {
  whiteboard.setAttribute("style", `width: ${wbSize}px; height: ${wbSize}px;`);
}

function setBoxSize() {
  if (Number(nrBoxInput.value)) {
    if (nrBoxInput.value > 0) {
      if (nrBoxInput.value <= 30) {
        boxSize = Number(nrBoxInput.value);
        wbSize = boxSize * 16;
      } else {
        alert("Whiboard maximum size is 30x30!");
      }
    } else {
      alert("Whiteboard size must be positive!");
    }
  } else {
    alert("Please enter a number!");
  }
}

function updateWhiteboard() {
  setBoxSize();
  removeBoxes();
  setWhiteboardSize();
  createBoxes();
  nrBoxInput.value = "";
}

function createBox() {
  const div = document.createElement("div");
  div.classList.add("box");
  whiteboard.appendChild(div);
  boxArray.push(div);
}

function createBoxes() {
  for (let i = 0; i < boxSize * boxSize; i++) {
    createBox();
  }
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

function removeBoxes() {
  while (whiteboard.childElementCount > 0) {
    for (let i = 0; i < whiteboard.childElementCount; i++) {
      whiteboard.removeChild(whiteboard.childNodes[i]);
    }
  }
}

// EVENT LISTENERS

window.addEventListener("load", (e) => {
  createBoxes();
});

nrBoxInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    updateWhiteboard();
  }
});

addBoxesBtn.addEventListener("click", (e) => {
  updateWhiteboard();
});

whiteboard.addEventListener("click", colorBox);
