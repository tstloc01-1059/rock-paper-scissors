//we need a computer playing
//we need a way for a user to decide what move to make
//a way to compare both
//a way to track rounds

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
            computerChoice = 'Rock';
            break;

        case 1:
            computerChoice = 'Paper';
            break;

        case 2:
            computerChoice = 'Scissors';
            break;
    }

    return computerChoice //display the outcome as an alert

}

console.log(getComputerChoice())

// //## USER ##

// function getHumanChoice() {
//     return humanChoice
// }

// // ## ROUND 
// // ## 

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

//## LOGIC ##
// rock beats scissors
// paper beats rock
// scissors beat paper