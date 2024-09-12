let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    number = (Math.floor(Math.random() * 3)) + 1
    
    if (number === 1) {
        return 'rock'
    }
    else if (number === 2) {
        return 'paper'
    }
    else if (number === 3) {
        return 'scissors'
    }
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            message.textContent = "Tie!"
        }
        else if (computerChoice === 'paper') {
            message.textContent = "You lose! Paper beats Rock"
            computerScore ++
            computerTally.textContent = `Computer: ${computerScore}`
        }
        else if (computerChoice === 'scissors') {
            message.textContent = "You Win! Rock beats Scissors";
            playerScore ++
            playerTally.textContent = `Player: ${playerScore}`
            
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            message.textContent = "You win! Paper beats Rock"
            playerScore ++
            playerTally.textContent = `Player: ${playerScore}`
        }
        else if (computerChoice === 'paper') {
            message.textContent = "Tie!"
        }
        else if (computerChoice === 'scissors') {
            message.textContent = "You Lose! Scissors beats Paper"
            computerScore ++
            computerTally.textContent = `Computer: ${computerScore}`
        }
    }
    else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            message.textContent = "You lose! Rock beats Scissors"
            computerScore ++
            computerTally.textContent = `Computer: ${computerScore}`
        }
        else if (computerChoice === 'paper') {
            message.content = "You Win! Scissors beats Paper"
            playerScore ++
            playerTally.textContent = `Player: ${playerScore}`
        }
        else if (computerChoice === 'scissors') {
            message.textContent = "Tie!"
        }
    }

}



function gameRecap() {
    if (computerScore > playerScore) {
        message.textContent = `Game Over! Computer wins ${computerScore} to ${playerScore}!`
    }
    else if (computerScore < playerScore) {
        message.textContent = `Game Over! You win ${playerScore} to ${computerScore}!`
    }
    rockButton.remove();
    paperButton.remove();
    scissorsButton.remove();
}


const rockButton = document.querySelector(".rock")
rockButton.addEventListener("click" , () => {
    playRound('rock', getComputerChoice());
    if (playerScore === 5 || computerScore === 5) {
        gameRecap()
    }
});

const paperButton = document.querySelector(".paper")
paperButton.addEventListener("click", () => {
    playRound('paper', getComputerChoice());
    if (playerScore === 5 || computerScore === 5) {
        gameRecap()
    }
});

const scissorsButton = document.querySelector(".scissors")
scissorsButton.addEventListener("click", () => {
    playRound('scissors', getComputerChoice());
    if (playerScore === 5 || computerScore === 5) {
        gameRecap()
    }
});

const scoreboard = document.querySelector(".scoreboard")
scoreboard.style.textAlign = "center"
scoreboard.style.fontSize = "32px"

const buttons = document.querySelector(".buttons");
buttons.style.display = "flex"
buttons.style.margin = "30px 50px"
buttons.style.justifyContent = "space-evenly"
buttons.style.gap = "35px"

const computerTally = document.querySelector(".computerTally")
computerTally.textContent = `Computer: ${computerScore}`
computerTally.style.fontSize = "16px"

const playerTally = document.querySelector(".playerTally")
playerTally.textContent = `Player: ${playerScore}`
playerTally.style.fontSize = "16px"

const message = document.createElement("p")
message.textContent = "Player vs Computer! First to 5 Points Wins!"
scoreboard.appendChild(message)

