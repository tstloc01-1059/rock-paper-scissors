// ## VARIABLES ##

let humanChoiceFunction = ''
let computerChoiceFunction = ''

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
    computerChoiceFunction = computerChoice;
    return computerChoice // returning the translated outcome

}

//## USER ##

function getHumanChoice() {
    let humanChoice = prompt('What shall your hand be?');
    humanChoiceFunction = humanChoice
    return humanChoice
}

// ## ROUND ##

function playRoundTest(hChoice, cChoice) {
    hChoice = hChoice.toLowerCase()
    let computerScore = 0
    let humanScore = 0
    let outcome = ''
    let rounds = 0
    for (let i = 0; i < 5; i++) {
        console.log(i)
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

        console.log('exit loop')

        rounds++

        console.log('rounds added')

        console.log(`Guess what?! ${outcome}!
            ROBOT: ${computerScore} | FLESHBAG: ${humanScore}
            This is round ${rounds}.
            FLESH CHOSE: ${humanChoiceFunction} | ROBOT CHOSE: ${computerChoiceFunction}`)

        console.log('alert finished')

        getHumanChoice()
        getComputerChoice()

        console.log('retriggered functions')
    }

    alert('GAME OVER!')
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRoundTest(humanSelection, computerSelection)