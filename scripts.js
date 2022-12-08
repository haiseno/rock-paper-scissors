//Create a function for the computer's play that randomly returns a choice of "Rock", "Paper" or "Scissors"
function getcomputerHistory(e) {

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
let pScore = 0;
let cScore = 0;
let tieCount = 0;

//Scorekeeping
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const tiePoints = document.querySelector(".ties");
const playerHistory = document.querySelector(".player-history");
const computerHistory = document.querySelector(".computer-history");

//To display results
const result = document.querySelector(".round-results");

//Create a function that plays a single round of rps
function playRound(e) {

    //Set playerSelection to which button was clicked
    const playerSelection = e.currentTarget.id;

    //Randomly generate computer's play
    const computerSelection = getcomputerHistory();

    //Checks to see if match ends and resets the game
    if (pScore === 5 || cScore === 5) {
        pScore = 0;
        cScore = 0;
        tieCount = 0;
        playerScore.textContent = `${pScore}`;
        tiePoints.textContent = `Ties: ${tieCount}`
        computerScore.textContent = `${cScore}`;
        playerHistory.innerHTML = "";
        computerHistory.innerHTML = "";
    }

    //Displays player and computer's play history by creating and appending new divs
    const player = document.createElement("p");
    const computer = document.createElement("p");
    player.textContent = `${playerSelection.toUpperCase()}`;
    computer.textContent = `${computerSelection.toUpperCase()}`;
    playerHistory.appendChild(player);
    computerHistory.appendChild(computer);
    //Scroll into view as moves update beyond container
    playerHistory.scrollTop = playerHistory.scrollHeight;
    computerHistory.scrollTop = computerHistory.scrollHeight;

    //When both choices are the same (tie)
    if (playerSelection === computerSelection) {
        result.textContent = "It's a tie!";
        tiePoints.textContent = `Ties: ${++tieCount}`
    }

    //When player chooses "rock"
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            result.textContent = "You win! Rock beats scissors.";
            playerScore.textContent = `${++pScore}`; //Scorekeeping for player wins
        }
        else if (computerSelection === "paper") {
            result.textContent = "You lose! Paper beats rock.";
            computerScore.textContent = `${++cScore}`; //Scorekeeping for computer wins
        }
    }

    //When player chooses "paper"
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result.textContent = "You win! Paper beats rock.";
            playerScore.textContent = `${++pScore}`;
        }
        else if (computerSelection === "scissors") {
            result.textContent = "You lose! Scissors beat paper.";
            computerScore.textContent = `${++cScore}`;
        }
    }

    //When player chooses "scissors"
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            result.textContent = "You win! Scissors beat paper.";
            playerScore.textContent = `${++pScore}`;
        }
        else if (computerSelection === "rock") {
            result.textContent = "You lose! Rock beats scissors.";
            computerScore.textContent = `${++cScore}`;
        }
    }

    //"Winner" div to display winner of the match
    winner = document.querySelector(".winner");

    //Checks to see if there is a winner
    //Clears out winner declaration message at the start of every round
    if (pScore == 5) {
        winner.textContent = "Congratulations, you win! You're the best rock, paper, scissors player ever!";
    }
    else if (cScore == 5) {
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