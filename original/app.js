const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// Generates the computer's choice
function computerPlay() {
        let randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
};

// Function that plays a single round, displays the winner, and updates the score
function playRound(playerSelection, computerSelection) {
    switch(playerSelection + computerSelection) {
        // Player Wins
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            playerScore ++;
            return `You win! ${playerSelection} beats ${computerSelection}! Player ${playerScore} : Computer ${computerScore}`;
            break;
        // Computer Wins
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            computerScore ++;
            return `You lose! ${computerSelection} beats ${playerSelection}! Player ${playerScore} : Computer ${computerScore}`;
            break;
        // Draw
        default:
            return `Draw. Please play again`;
    };
};

// Game function that plays the game 5 times
function game() {
    for(let i = 0; i < 5; i++){
        let playerPrompt = window.prompt("State your choice. Rock, Paper,or Scissors?");
        const playerSelection = playerPrompt.toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    };
    if(playerScore > computerScore) {
        console.log(`Yay! You win the game!`);
    } else if(playerScore < computerScore) {
        console.log(`You lose the game!`);
    } else {
        console.log(`Draw`);
    }
};

game();
