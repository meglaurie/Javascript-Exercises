function computerPlay(){
    min = Math.ceil(0);
    max = Math.floor(1);
    var random = Math.random(min, max);
    var choice; 
    if( random >= 0 && random <= 0.3){
        choice = 'rock';
    }if(random >= 0.3 && random <= 0.6){
        choice = 'paper';
    }if(random >= 0.6 && random <= 1){
        choice = 'scissors';
    }
    return choice;
}

console.log(computerPlay());

var playerSelection = 'ROCK';
var computerSelection = computerPlay();


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('player wins');
    }
    if(playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('computer wins');
    }
    if(playerSelection === 'rock' && computerSelection === 'rock'){
        console.log('tie');
    }
    if(playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('player wins');
    }
    if(playerSelection === 'paper' && computerSelection === 'paper'){
        console.log('tie');
    }
    if(playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('computer wins');
    }
    if(playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log('computer wins');
    }
    if(playerSelection === 'scissors' && computerSelection === 'scissors'){
        console.log('tie');
    }
    if(playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log('player wins');
    }
    
}


playRound(playerSelection, computerSelection);