const container = document.querySelector("#etchASketch");
const square = document.createElement("div");
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  clearGrid();
  let size = prompt("enter size 1-100");
  if (size <= 100) {
    addSquares(size);
  } else {
    alert("size out of range");
  }
});

function addSquares(gridSize) {
  for (let index = 0; index < gridSize; index++) {
    const square = document.createElement("div");
    square.style["width"] = (screen.width - 100) / gridSize;
    square.setAttribute("class", "column");
    container.appendChild(square);
    for (let indexc = 0; indexc < gridSize; indexc++) {
      const squareC = document.createElement("div");
      squareC.style["width"] = (screen.width - 100) / gridSize;
      squareC.setAttribute("class", "square");
      square.appendChild(squareC);
      squareC.addEventListener("mouseenter", function () {
        squareC.style["background-color"] = "black";
      });
    }
  }
}

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}
