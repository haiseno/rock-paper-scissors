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

//Create a function that plays a single round of rps
//Take in parameters for player's choice and computer's choice
function playRound(e) {
    
    //Set playerSelection to which button was clicked
    const playerSelection = e.target.textContent;

    //Randomly generate computer's play
    const computerSelection = getComputerChoice();

    console.log(`You chose: ${playerSelection}.\nComputer chose: ${computerSelection}.`);

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

//Access the buttons with a selector and assign to variable
const buttons = document.querySelectorAll("button");

//Loop through buttons nodelist and add an event listener to each individual button
//On click event, callback playRound function
buttons.forEach(button => button.addEventListener("click", playRound));