'use strict';

// Randomly returns Rock, Paper or Scissors
function getComputerChoice(){
    const computerChoice = (Math.floor(Math.random() * 3))
    if(computerChoice === 0){
        return 'Rock';
    }else if(computerChoice === 1){
        return 'Paper';
    }else if(computerChoice === 2){
        return 'Scissors';
    }
}

getComputerChoice();