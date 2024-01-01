import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

// Your code here

window.addEventListener("DOMContentLoaded", event => {
    const hiddenGameOver = document.createElement("h2");
    hiddenGameOver.innerText = "You've won!";
    hiddenGameOver.classList.add("hide");
    document.body.append(hiddenGameOver);

    const resetButton = document.createElement("button");
    resetButton.innerText = "Reset The Game";
    document.body.append(resetButton);

    let gameGrid;

    let addGrid = () => {
        gameGrid = document.createElement("div");
        gameGrid.id = "board";
        document.body.append(gameGrid);

        board.grid.forEach((row, rowNumber) => {
            row.forEach((col, colNumber) => {
                
                // Create the Squares
                let container = document.createElement("div");
                container.className = "square";

                // Assign the Squares Data for Row/Col 
                container.setAttribute("data-row", rowNumber);
                container.setAttribute("data-col", colNumber);

                // Add each Square to the HTML body
                gameGrid.append(container);
            })
        })
    }

    addGrid()

    resetButton.addEventListener("click", event => {
        board = new Board();
        hiddenGameOver.classList.add("hide");
        hiddenGameOver.classList.remove("show");

        gameGrid.remove();
        addGrid();

        gameGrid.addEventListener("click", gameGridClickListener);
    })


    const gameGridClickListener = (event) => {
        let row = event.target.dataset.row;
        let col = event.target.dataset.col;
        const result = board.makeHit(row, col);

        if(result){
            event.target.classList.add("correct");
            event.target.innerText = result;
        }

        if(!result){
            event.target.classList.add("incorrect");
        }

        if(board.isGameOver()){
            hiddenGameOver.classList.add("show");
            hiddenGameOver.classList.remove("hide");
            gameGrid.removeEventListener("click", gameGridClickListener);
        }
    }

    gameGrid.addEventListener("click", gameGridClickListener);
});