function playAgain() {
    const resetPlayerHistory = document.querySelector(".player-history");
    const resetComputerHistory = document.querySelector(".computer-history"); 
    const resetResult = document.querySelector(".round-results");
    const resetPlayerScore = document.querySelector(".player-points");
    const resetComputerScore = document.querySelector(".computer-points");
    const resetTies = document.querySelector(".ties");

    resetPlayerHistory.innerHTML += "<br>" + `${playerSelection}`;
    resetComputerHistory.innerHTML += "<br>" + `${computerSelection}`;
    resetResult.innerHTML = "Choose your move..."
    resetPlayerScore.innerHTML = "0";
    resetComputerScore.innerHTML = "0"
    resetTies.innerHTML = "0"
}

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

    //Set playerSelection to which button was clicked
    const playerSelection = e.currentTarget.id;

    //Randomly generate computer's play
    const computerSelection = getComputerChoice();

    //Displays player and computer's plays
    const playerChoice = document.querySelector(".player-history");
    const computerChoice = document.querySelector(".computer-history");
    playerChoice.innerHTML += "<br>" + `${playerSelection.toUpperCase()}`;
    computerChoice.innerHTML += "<br>" + `${computerSelection.toUpperCase()}`;

    //Scorekeeping
    const playerPoints = document.querySelector(".player-points");
    const computerPoints = document.querySelector(".computer-points");
    const tiePoints = document.querySelector(".ties");

    //Resets the score when the previous match ends (someone scores 5 points)
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        tieCount = 0;
        playerPoints.textContent = `${playerScore}`;
        tiePoints.textContent = `Ties: ${tieCount}`
        computerPoints.textContent = `${computerScore}`;
    }

    //Query selectors to grab onto divs that display results of each round and scorekeeping
    const result = document.querySelector(".round-results");

    //When both choices are the same (tie)
    //.toLowerCase() to make player choice case-insensitive
    if (playerSelection === computerSelection) {
        result.textContent = "It's a tie!";
        tiePoints.textContent = `Ties: ${++tieCount}`
    }

    //When player chooses "rock"
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            result.textContent = "You win! Rock beats scissors.";
            playerPoints.textContent = `${++playerScore}`; //Scorekeeping for player wins
        }
        else if (computerSelection === "paper") {
            result.textContent = "You lose! Paper beats rock.";
            computerPoints.textContent = `${++computerScore}`; //Scorekeeping for computer wins
        }
    }

    //When player chooses "paper"
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result.textContent = "You win! Paper beats rock.";
            playerPoints.textContent = `${++playerScore}`;
        }
        else if (computerSelection === "scissors") {
            result.textContent = "You lose! Scissors beat paper.";
            computerPoints.textContent = `${++computerScore}`;
        }
    }

    //When player chooses "scissors"
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            result.textContent = "You win! Scissors beat paper.";
            playerPoints.textContent = `${++playerScore}`;
        }
        else if (computerSelection === "rock") {
            result.textContent = "You lose! Rock beats scissors.";
            computerPoints.textContent = `${++computerScore}`;
        }
    }

    //"Winner" div to display winner of the match
    winner = document.querySelector(".winner");

    //Checks to see if there is a winner
    //Clears out winner declaration message at the start of every round
    if (playerScore == 5) {
        winner.textContent = "Congratulations, you win! You're the best rock, paper, scissors player ever!";
    }
    else if (computerScore == 5) {
        winner.textContent = "Computer wins. Defeat only means more opportunities for improvement."
    }
    else {
        winner.textContent = "";
    }
}

//Access the buttons with a selector and assign to variable
const buttons = document.querySelectorAll("button");

//Loop through buttons nodelist and add an event listener to each individual button
//On click event, callback playRound function
buttons.forEach(button => button.addEventListener("click", playRound));