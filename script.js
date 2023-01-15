const whiteboard = document.querySelector(".whiteboard");
let isClicked = false;
let boxArray = [];

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("box");
  whiteboard.appendChild(div);
  boxArray.push(div);
}

whiteboard.addEventListener("click", () => {
  isClicked = true;
  if (isClicked) {
    for (let i = 0; i < boxArray.length; i++) {
      boxArray[i].addEventListener(
        "mouseenter",
        () => (boxArray[i].style.backgroundColor = "black")
      );
    }
  }
});
