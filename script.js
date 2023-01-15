const whiteboard = document.querySelector(".whiteboard");
let boxArray = [];

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("box");
  whiteboard.appendChild(div);
  boxArray.push(div);
}
