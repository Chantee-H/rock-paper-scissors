'use strict';

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

let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection){
    let result = '';
    let scores = '';
    let winner = '';

    while(playerScore < 5 && computerScore < 5){
        if(playerSelection === computerSelection){
        result = ('Tie! ' + ' You both chose ' + playerSelection);
        scores = ('Player Score: ' + playerScore + ' Computer Score: ' + computerScore)
    }else if((playerSelection === 'Paper' && computerSelection === 'Rock')||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')||
    (playerSelection === 'Rock' && computerSelection === 'Scissors')){
        playerScore += 1;
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection);
        scores = ('Player Score: ' + playerScore + ' Computer Score: ' + computerScore);
    }else if((playerSelection === 'Rock' && computerSelection === 'Paper')||
    (playerSelection === 'Paper' && computerSelection === 'Scissors')||
    (playerSelection === 'Scissors' && computerSelection === 'Rock')){
        computerScore += 1;
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection);
        scores = ('Player Score: ' + playerScore + ' Computer Score: ' + computerScore);
    }

    if(playerScore === 5){
        winner = 'You Won The Game!';
    }else if(computerScore === 5){
        winner = 'You Lost The Game!';
    }

    document.getElementById('result').innerHTML = result;
    document.getElementById('scores').innerHTML = scores;
    document.getElementById('winner').innerHTML = winner;
    return

    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
button.addEventListener('click', () =>{
    playRound(button.id);
})
})


