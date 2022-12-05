//Create a function for the computer's play that randomly returns a choice of "Rock", "Paper" or "Scissors"
function getComputerChoice() {

    //randomly choose a number between 0-2 (0, 1, 2)
    const ranNum = Math.floor(Math.random() * 3);

    //return a string for the "computer's choice" based on randomly generated number
    switch (ranNum) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

//Create a function that plays a single round of rps
//Take in parameters for player's choice and computer's choice
function playRound(playerSelection, computerSelection) {

    //When both choices are the same
    //.toLowerCase() to make player choice case-insensitive
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log("It's a tie!");
        return "tie";
    }

    //When player chooses "rock"
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "scissors") {
            console.log("You win! Rock beats scissors.");
            return "win";
        }
        else if (computerSelection === "paper") {
            console.log("You lose! Paper beats rock.");
            return "lose";
        }
    }

    //When player chooses "paper"
    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            console.log("You win! Paper beats rock.");
            return "win";
        }
        else if (computerSelection === "scissors") {
            console.log("You lose! Scissors beat paper.");
            return "lose";
        }
    }

    //When player chooses "scissors"
    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            console.log("You win! Scissors beat paper.");
            return "win";
        }
        else if (computerSelection === "rock") {
            console.log("You lose! Rock beats scissors.");
            return "lose";
        }
    }
}

//Create a function that plays a single game of rps consisting of 5 rounds
function game() {

    //initialize counter variables to keep score
    let playerScore = 0;
    let computerScore = 0;
    let tieCount = 0;
    //declare results variable to store each round's result
    let roundResult;

    //Create a loop for 5 rounds
    for (let i = 0; i < 5; i++) {

        //Prompt user for their choice
        const playerSelection = prompt("Rock, Paper or Scissors?", "");

        //Randomly generate computer's play
        const computerSelection = getComputerChoice();
        
        console.log(`You chose: ${playerSelection}.\nComputer chose: ${computerSelection}.`);

        //Play a single round of rps in each loop and store result in roundResult variable
        roundResult = playRound(playerSelection, computerSelection);

        //Checks the result of each round to keep score
        if (roundResult === "win") {
            playerScore++;
        }
        else if (roundResult === "lose") {
            computerScore++;
        }
        else {
            tieCount++;
        }

        //Display current score at the end of each round
        console.log(`Score:\nPlayer: ${playerScore}\nComputer: ${computerScore}\nTies: ${tieCount}`);
    }

    //Compare scores at the end of the game to declare winner of the match
    if (playerScore === computerScore) {
        console.log("It's a tie! We will resume our glorious battle again another day!");
    }
    
    if (playerScore > computerScore) {
        console.log("Congratulations, you win! You're the best rock, paper, scissors player ever!");
    }
    else {
        console.log("Computer wins. Defeat only means more opportunities for improvement.");
    }
}