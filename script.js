// ## VARIABLES ##

// let computerChoice = ''
// let humanChoice = prompt('What shall your hand be?') //user input of string "rock, paper, scissors"
let computerScore = 0
let humanScore = 0

// ## COMPUTER ##

function getComputerChoice() {
    let computerChoice = ''
    let result = Math.floor(Math.random() * 3) //create random number between 0 and 2
    switch (result) { //assign 0,1,2 a name rock, paper, scissors
        case 0:
            computerChoice = 'rock';
            break;

        case 1:
            computerChoice = 'paper';
            break;

        case 2:
            computerChoice = 'scissors';
            break;
    }
    console.log(computerChoice + '**')
    return computerChoice // returning the translated outcome

}

//## USER ##

function getHumanChoice() {
    let humanChoice = prompt('What shall your hand be?');
    console.log(humanChoice)
    return humanChoice
}

// ## ROUND ##

function playRoundTest(hChoice, cChoice) {
    hChoice = hChoice.toLowerCase()
    let outcome = ''
    let rounds = 0
    for (let i = 4; i >= rounds; i--) {
            if (hChoice === 'rock' && cChoice === 'paper') {
                outcome = 'ROBOT WINS'
                computerScore += 1
            } else if (hChoice === 'paper' && cChoice === 'rock') {
                outcome = 'FLESHTHING WINS'
                humanScore += 1
            } else if (hChoice === 'paper' && cChoice === 'scissors') {
                outcome = 'ROBOT WINS'
                computerScore += 1
            } else if (hChoice === 'scissors' && cChoice === 'paper') {
                outcome = 'FLESHTHING WINS'
                humanScore += 1
            } else if (hChoice === 'scissors' && cChoice === 'rock') {
                outcome = 'ROBOT WINS'
                computerScore += 1
            } else if (hChoice === 'rock' && cChoice === 'scissors') {
                outcome = 'FLESHTHING WINS'
                humanScore += 1
            } else if (hChoice === cChoice) {
                outcome = 'YOU DRAW LOSERS!'
            }
        
            rounds++
        
        alert(`Guess what?! ${outcome}! ROBOT: ${computerScore} | FLESHBAG: ${humanScore}
        This is round ${rounds}.`)

        getHumanChoice()
        getComputerChoice()
    }
    alert('GAME OVER!')
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRoundTest(humanSelection, computerSelection)

// function playRound(humanChoice, computerChoice) {
//     // humanChoice = humanChoice.toLowerCase()
//     // computerChoice = computerChoice.toLowerCase()

//     switch (true) {
//         case humanChoice === 'rock' && computerChoice === 'scissors':
//             console.log('HUMAN WINS');
//             break;
//         case humanChoice === 'scissors' && computerChoice === 'rock':
//             console.log('MACHINE WINS');
//             break;

//     }



// console.log(getHumanChoice())
// console.log(getComputerChoice().toLowerCase() + '***')

// playRound(humanSelection, computerSelection);

//send it to the script
//activate COMPUTER player randomiser number
//store computer value
//compare it with player

//## OUTCOME ##
// display some message to say win or lose