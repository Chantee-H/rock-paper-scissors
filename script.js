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

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return 'Tie!';
    }else if(playerSelection === 'Rock' && computerSelection === 'Paper'){
        return 'You lose! Paper beats Rock';
    }else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
        return 'You win! Paper beats Rock';
    }else if(playerSelection === 'Paper' && computerSelection === 'Scissors'){
        return 'You lose! Scissors beats Paper';
    }else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
        return 'You win! Scissors beats Paper';
    }else if(playerSelection === 'Scissors' && computerSelection === 'Rock'){
        return 'You lose! Rock beats Scissors';
    }else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        return 'You win! Rock beats Scissors';
    }
}