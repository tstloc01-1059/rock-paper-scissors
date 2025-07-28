//## VARIABLES ##

let humanScore = 0
let computerScore = 0
let drawCount = 0
// let rounds = humanScore + computerScore + drawCount

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
    let humanChoice = prompt('rock, paper, or scissors bro?');
    return humanChoice.toLowerCase()
}

// ## ROUND ##

function playRound(hChoice, cChoice) {
    let outcome = '' // this updates with the string of the comparison logic 

    if (hChoice === 'rock' && cChoice === 'paper') {
        outcome = 'ROBOT WINS'
        computerScore++
    } else if (hChoice === 'paper' && cChoice === 'rock') {
        outcome = 'FLESHTHING WINS'
        humanScore++
    } else if (hChoice === 'paper' && cChoice === 'scissors') {
        outcome = 'ROBOT WINS'
        computerScore++
    } else if (hChoice === 'scissors' && cChoice === 'paper') {
        outcome = 'FLESHTHING WINS'
        humanScore++
    } else if (hChoice === 'scissors' && cChoice === 'rock') {
        outcome = 'ROBOT WINS'
        computerScore++
    } else if (hChoice === 'rock' && cChoice === 'scissors') {
        outcome = 'FLESHTHING WINS'
        humanScore++
    } else if (hChoice === cChoice) {
        outcome = 'YOU DRAW LOSERS!'
        drawCount++
    } else { outcome = 'invalid input!' }

    console.log(`human: ${hChoice} | robot: ${cChoice} ||| ${outcome}
        humanscore: ${humanScore} robotscore: ${computerScore} drawscore: ${drawCount}`
    )

}

// ## GAME ##

function playGame() {
    let round = 0

    while (round < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
        round++
    }

    if (humanScore > computerScore) {
        console.log('CONGRATS YOU DEFEATED THE AI OVERLORD')
    } else { console.log('sounds like zion is done for') }
}

playGame()