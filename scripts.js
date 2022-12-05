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
//Returns a string that declares winner of round

//Create a function that plays a single game of rps (bo5)
//Loop playRound function 5 times
//Declare the winner of each round
//Keep score and report a winner/loser at the end