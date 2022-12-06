//Create a function for the computer's play that randomly returns a choice of "Rock", "Paper" or "Scissors"
function getComputerChoice(e) {

    //Randomly choose a number between 0-2 (0, 1, 2)
    const ranNum = Math.floor(Math.random() * 3);

    //Return a string for the "computer's choice" based on randomly generated number
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

//Initialize counter variables to keep score
let playerScore = 0;
let computerScore = 0;
let tieCount = 0;

//Create a function that plays a single round of rps
function playRound(e) {

    //Resets the score when the previous match ends (someone scores 5 points)
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        tieCount = 0;
    }

    //Set playerSelection to which button was clicked
    const playerSelection = e.target.textContent;

    //Randomly generate computer's play
    const computerSelection = getComputerChoice();

    //Displays player and computer's chosen plays
    const choices = document.querySelector("#choices");
    choices.textContent = `You chose: ${playerSelection}.\nComputer chose: ${computerSelection}.`;

    //Query selectors to grab onto divs that display results of each round and scorekeeping
    const result = document.querySelector("#results");
    const score = document.querySelector("#score");

    //When both choices are the same (tie)
    //.toLowerCase() to make player choice case-insensitive
    if (playerSelection.toLowerCase() === computerSelection) {
        result.textContent = "It's a tie!"; //Round result
        score.textContent = `Player: ${playerScore}. Computer: ${computerScore}. Ties: ${++tieCount}`; //Scorekeeping
    }

    //When player chooses "rock"
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "scissors") {
            result.textContent = "You win! Rock beats scissors.";
            score.textContent = `Player: ${++playerScore}. Computer: ${computerScore} Ties: ${tieCount}`;
        }
        else if (computerSelection === "paper") {
            result.textContent = "You lose! Paper beats rock.";
            score.textContent = `Player: ${playerScore}. Computer: ${++computerScore} Ties: ${tieCount}`;
        }
    }

    //When player chooses "paper"
    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            result.textContent = "You win! Paper beats rock.";
            score.textContent = `Player: ${++playerScore}. Computer: ${computerScore} Ties: ${tieCount}`;
        }
        else if (computerSelection === "scissors") {
            result.textContent = "You lose! Scissors beat paper.";
            score.textContent = `Player: ${playerScore}. Computer: ${++computerScore} Ties: ${tieCount}`;
        }
    }

    //When player chooses "scissors"
    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            result.textContent = "You win! Scissors beat paper.";
            score.textContent = `Player: ${++playerScore}. Computer: ${computerScore} Ties: ${tieCount}`;
        }
        else if (computerSelection === "rock") {
            result.textContent = "You lose! Rock beats scissors.";
            score.textContent = `Player: ${playerScore}. Computer: ${++computerScore} Ties: ${tieCount}`;
        }
    }

    //"Winner" div to display winner of the match
    winner = document.querySelector("#winner");

    //Clears out winner declaration message at the start of every round
    if (playerScore < 5 || computerScore < 5) {
        winner.textContent = "";
    }

    //Checks to see if there is a winner
    if (playerScore == 5) {
        winner.textContent = "Congratulations, you win! You're the best rock, paper, scissors player ever!";
    }
    else if (computerScore == 5) {
        winner.textContent = "Computer wins. Defeat only means more opportunities for improvement."
    }
}

//Access the buttons with a selector and assign to variable
const buttons = document.querySelectorAll("button");

//Loop through buttons nodelist and add an event listener to each individual button
//On click event, callback playRound function
buttons.forEach(button => button.addEventListener("click", playRound));