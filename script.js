//we need a computer playing
//we need a way for a user to decide what move to make
//a way to compare both
//a way to track rounds

// ## COMPUTER ##

let computerChoice = ''

function getComputerChoice() {
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

//## USER ##

let userChoice = prompt('What shall your hand be?') //user input of string "rock, paper, scissors"
console.log(userChoice)


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