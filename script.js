// ## VARIABLES ##

// let computerChoice = ''
// let humanChoice = prompt('What shall your hand be?') //user input of string "rock, paper, scissors"
// let computerScore = 0
// let humanScore = 0

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

//     // if (humanChoice == 'rock' && computerChoice == 'scissors') {
//     //     console.log('HUMAN WINS')
//     // } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
//     //     console.log('MACHINE WINS')
//     // } else if (humanChoice == 'paper' && computerChoice == 'rock') {
//     //     console.log('HUMAN WINS')
//     // } else if (humanChoice == 'rock' && computerChoice == 'paper') {
//     //     console.log('MACHINE WINS')
//     // } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
//     //     console.log('HUMAN WINS')
//     // } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
//     //     console.log('MACHINE WINS')
//     // } else {
//     //     console.log('whatever')
//     // }
// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// console.log(getHumanChoice())
// console.log(getComputerChoice().toLowerCase() + '***')

// playRound(humanSelection, computerSelection);

//send it to the script
//activate COMPUTER player randomiser number
//store computer value
//compare it with player

//## OUTCOME ##
// display some message to say win or lose