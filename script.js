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

// Plays a single round of Rock Paper Scissors
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

let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

// Plays 5 rounds of Rock Paper Scissors
function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = window.prompt('Choose Rock, Paper or Scissors.');
        let gameScore = playRound(playerSelection, computerSelection);
        if(gameScore.includes('You win!')){
            playerScore += 1;
        }else if(gameScore.includes('You lose!')){
            computerScore += 1;
        }
        console.log(playRound(playerSelection, computerSelection))
    }
    
}
