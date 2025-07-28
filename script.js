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
    return computerChoice // returning the translated outcome

}

//## USER ##

function getHumanChoice() {
    let humanChoice = prompt('What shall your hand be?');
    return humanChoice
}

// ## ROUND ##

function playRound(hChoice, cChoice) {
    hChoice = hChoice.toLowerCase()
    let outcome = ''

    if (hChoice === 'rock' && cChoice === 'paper') {
        outcome = 'ROBOT WINS'
        // computerScore += 1
        console.log('a1')
    } else if (hChoice === 'paper' && cChoice === 'rock') {
        outcome = 'FLESHTHING WINS'
        // humanScore += 1
        console.log('a2')
    } else if (hChoice === 'paper' && cChoice === 'scissors') {
        outcome = 'ROBOT WINS'
        // computerScore += 1
        console.log('b1')
    } else if (hChoice === 'scissors' && cChoice === 'paper') {
        outcome = 'FLESHTHING WINS'
        // humanScore += 1
        console.log('b2')
    } else if (hChoice === 'scissors' && cChoice === 'rock') {
        outcome = 'ROBOT WINS'
        // computerScore += 1
        console.log('c1')
    } else if (hChoice === 'rock' && cChoice === 'scissors') {
        outcome = 'FLESHTHING WINS'
        // humanScore += 1
        console.log('c2')
    } else if (hChoice === cChoice) {
        outcome = 'YOU DRAW LOSERS!'
        console.log('d1')
    }

    console.log('pre-alert console')

    console.log(`human: ${hChoice} | robot: ${cChoice} ||| ${outcome}`)

    console.log('exit loop')

}

// ## GAME ##

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
playRound(humanSelection, computerSelection)
}

playGame()