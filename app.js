let playerScore = 0;
let computerScore = 0;
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("comp-score");
let result = document.querySelector(".result > p");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resetBtn = document.querySelector(".reset-btn");
const modal = document.querySelector(".modal");
const modalText = document.querySelector(".modal-text");
const modalBtn = document.querySelector(".modal-btn");

// Computer Choice
function generateComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let number = Math.floor(Math.random() * 3);
    return choices[number];
};

// Capitalize words because I was dumb and forgot to when starting
function capital(word) {
    if(word === "rock") return "Rock";
    if(word === "paper") return "Paper";
    return "Scissors";
};

// Win function
function win(playerChoice, computerChoice) {
    const getPlayerChoiceDiv = document.getElementById(playerChoice);
    playerScore ++;
    playerScoreSpan.textContent = playerScore;
    result.textContent = `${capital(playerChoice)} beats ${capital(computerChoice)}! You Win!`;
    getPlayerChoiceDiv.classList.add("green-glow");
    setTimeout(() => {
        getPlayerChoiceDiv.classList.remove("green-glow");
    }, 300);
    if(playerScore === 5) {
        modal.style.display = "block";
        modalText.textContent = `You Win The Game! Yay!`;
    };
};

// Lose function
function lose(playerChoice, computerChoice) {
    const getPlayerChoiceDiv = document.getElementById(playerChoice);
    computerScore ++;
    computerScoreSpan.textContent = computerScore;
    result.textContent = `${capital(computerChoice)} beats ${capital(playerChoice)}! You Lose!`;
    getPlayerChoiceDiv.classList.add("red-glow");
    setTimeout(() => {
        getPlayerChoiceDiv.classList.remove("red-glow");
    }, 300);
    if(computerScore === 5) {
        modal.style.display = "block";
        modalText.textContent = `Sorry. You Lose.`;
    };
};

function draw(playerChoice) {
    const getPlayerChoiceDiv = document.getElementById(playerChoice);
    result.textContent = `Draw. Please play again.`;
    getPlayerChoiceDiv.classList.add("gray-glow");
    setTimeout(() => {
        getPlayerChoiceDiv.classList.remove("gray-glow");
    }, 300);
};

// One Round of the game
function game(playerChoice) {
    const computerChoice = generateComputerChoice();
    switch(playerChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(playerChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(playerChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(playerChoice);
            break;
    };
};

// Player choice
function playerChoice() {
    rockBtn.addEventListener("click", () => {
        game("rock");
    });
    paperBtn.addEventListener("click", () => {
        game("paper");
    });
    scissorsBtn.addEventListener("click", () => {
        game("scissors");
    });
};

playerChoice();

// Modal button
modalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    reset();
})

// Reset button
resetBtn.addEventListener("click", () => {
    reset();
});

function reset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;
};