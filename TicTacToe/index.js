const cells= document.querySelectorAll(".cell");
const textStatus = document.querySelector("#textStatus");
const restartBtn = document.querySelector("#restart");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
initializeGame();

function initializeGame(){
    //add event listener for each cell when clicked
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    //an eventlistener to initialize restartGame func
    restartBtn.addEventListener("click", restartGame);
    //change the text to update players turn 
    textStatus.textContent = `${currentPlayer}'s turn`;
    //when game is initialized running must be true
    running = true;
}
function cellClicked(){
    //a local variable to check cellIndex, if not empty
    //and if the game is running nothing should be done
     const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != ""  || !running){
        return;
    }
    // function to write in cell
    updateCell( this, cellIndex); 
    //function to check and announce winner
    checkWinner();
        
    }

function updateCell(cell, index){
    //update the placeholder each time a player changes
    //also change the text content to next player
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    textStatus.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false;
    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
       
        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }
    if(roundWon){
        textStatus.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if(!options.includes("")){
        textStatus.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    textStatus.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;


}