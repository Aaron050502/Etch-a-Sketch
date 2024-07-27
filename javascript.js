const container = document.querySelector("#container")
const amountButton = document.querySelector("#amountButton");
let sizeOfGrid = 16;

amountButton.addEventListener("click", () => {
    sizeOfGrid = +prompt("Amount of grids");
    while (sizeOfGrid <= 0 || !Number.isInteger(sizeOfGrid)) {
        sizeOfGrid = +prompt("Enter a positive number!");
    }



    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    createGrid(sizeOfGrid);
})


function createGrid(amountOfGrids) {
    for (let i = 0; i < amountOfGrids; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");

        for(let j = 0; j < amountOfGrids; j++) {
            const widthAndHeight = 1960 / sizeOfGrid;
            const gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;
           
           

            row.appendChild(gridBox);
        }
        container.appendChild(row);
    }


}

createGrid(sizeOfGrid);


container.addEventListener("mouseenter", (event) => {
    if (event.target.classList.contains("grid-box")) {
        event.target.style.background = "blue";
    }
}, true);