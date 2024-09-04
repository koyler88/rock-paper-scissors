// Create function named getComputerChoice
// getComputerChoice function should randomly return one of the following
// string values: 'rock', 'paper, or 'scissors'. *math.random?*
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






// Create function named getHumanChoice
// getHumanChoice function should return valid "rps" choice *use prompt*
// Make humanChoice parameter case-insensitive

function getHumanChoice() {
    choice = prompt("Rock, Paper, or Scissors? ")
    choice = choice.toLowerCase()
    a = 5
    if (choice === 'rock') {
        return choice
    }
    else if (choice === 'paper') {
        return choice
    }
    else if (choice === 'scissors') {
        return choice
    }
    else {
        alert("Invalid Choice")
        return getHumanChoice()
    }
}



//Create function named playRound with parameters humanChoice & computerChoice.
function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            console.log("Tie!")
        }
        else if (computerChoice === 'paper') {
            console.log("You lose! Paper beats Rock")
            computerScore ++
        }
        else if (computerChoice === 'scissors') {
            console.log("You Win! Rock beats Scissors")
            humanScore ++
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log("You win! Paper beats Rock")
            humanScore ++
        }
        else if (computerChoice === 'paper') {
            console.log("Tie!")
        }
        else if (computerChoice === 'scissors') {
            console.log("You Lose! Scissors beats Paper")
            computerScore ++
        }
    }
    else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log("You lose! Rock beats Scissors")
            computerScore ++
        }
        else if (computerChoice === 'paper') {
            console.log("You Win! Scissors beats Paper")
            humanScore ++
        }
        else if (computerChoice === 'scissors') {
            console.log("Tie!")
        }
    }

}


let humanScore = 0
let computerScore = 0



//compare choices to determine winner

//log a statment to declare winner with reasoning (ex. "Paper beats Rock")


// Create Function to print final game statement
function gameRecap() {
    if (computerScore > humanScore) {
        console.log(`Computer wins ${computerScore} to ${humanScore}!`)
    }
    else if (computerScore < humanScore) {
        console.log(`You win ${humanScore} to ${computerScore}!`)  
    }
    else if (computerScore === humanScore) {
        console.log(`It's a tie! ${humanScore} to ${computerScore}`)
    }
}
//Create function named playGame
//call playRound (5x)
//track scores
//declare final winner

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    gameRecap()
}

playGame()