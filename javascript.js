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
        getHumanChoice()
    }
}


//Create Variables for humanScore & computerScore (initial value of 0)
let humanScore = 0
let computerScore = 0
//Create function named playRound with parameters humanChoice & computerChoice.
function playRound(humanChoice, computerChoice) {
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
//Make humanChoice parameter case-insensitive

//compare choices to determine winner

//log a statment to declare winner with reasoning (ex. "Paper beats Rock")


//Create function named playGame
//call playRound (5x)
//track scores
//declare final winner