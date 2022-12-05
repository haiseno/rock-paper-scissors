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
        return "It's a tie.";
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

//Create a function that plays a single game of rps (bo5)
//Loop playRound function 5 times
//Declare the winner of each round
//Keep score and report a winner/loser at the end