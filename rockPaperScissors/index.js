// a variable assigned to all the buttons and text required
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

// a foreach statement to add event listener to all buttons when clicked and 
// a function to be executed
choiceBtn.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();

//event listener with variable to store results and display winner
playerText.textContent = `Player ${player}`;
computerText.textContent = `Computer ${computer}`;
resultText.textContent = checkWinner();

}) )

//a function that uses 3 random numbers to get what the computer's choice in RPS
// & a switch statement to link the number to either RP OR S
function computerTurn(){
    let randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;


    }
};
function checkWinner(){
    if(player == computer){
        return("DRAW!");
    }
    else if(computer =="ROCK"){
        return ( player == "PAPER") ? "YOU WIN!" : "YOU LOSE!";
    }
    else if(computer == "PAPER"){
        return( player == "SCISSORS") ? "YOU WIN!" : "YOU LOSE!";
    }
    else if (computer == "SCISSORS"){
        return( player == "ROCK") ? "YOU WIN!" : "YOU LOSE!"
    }
}