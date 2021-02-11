// function computerPlay(){
//     min = Math.ceil(0);
//     max = Math.floor(1);
//     var random = Math.random(min, max);
//     var choice; 
//     if( random >= 0 && random <= 0.3){
//         choice = 'rock';
//     }if(random >= 0.3 && random <= 0.6){
//         choice = 'paper';
//     }if(random >= 0.6 && random <= 1){
//         choice = 'scissors';
//     }
//     return choice;
// }

const myArray = ["rock", "paper", "scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}


const container = document.querySelector('#container');
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const btns = document.querySelectorAll('button');
let allBtns = document.querySelectorAll('.button'); 

rockBtn.value = 'rock';
paperBtn.value = 'paper';
scissorsBtn.value = 'scissors';

rockBtn.classList.add('button');
paperBtn.classList.add('button');
scissorsBtn.classList.add('button');

rockBtn.textContent = 'rock';
paperBtn.textContent = 'paper';
scissorsBtn.textContent = 'scissors';

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);

rockBtn.addEventListener('click', game);
paperBtn.addEventListener('click', game);
scissorsBtn.addEventListener('click', game);

const div = document.createElement('div');
const playerChoice = document.createElement('p');
const compChoice = document.createElement('p');
const round = document.createElement('p');
const score = document.createElement('p');

div.appendChild(playerChoice);
div.appendChild(compChoice);
div.appendChild(round);
div.appendChild(score);

container.appendChild(div);


var playerScore = 0;
var compScore = 0;  

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    // if( playerSelection != 'rock' || 'paper' || 'scissors'){
    //     prompt('error please enter rock paper or scissors.');
    // }
   
    if(playerSelection ==  computerSelection){
        score.textContent = 'tie';
    }else if((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')){
        score.textContent = "player wins";
        playerScore ++;
        console.log("player score " + playerScore);

    }else if((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')){
           
            score.textContent = "computer wins";
            compScore ++;
            console.log("comp score " + compScore);
        }

    

    }




function game(){
    
        var playerSelection = this.value;
        var computerSelection = computerPlay();
       
         playRound(playerSelection, computerSelection);
         playerChoice.textContent = "player: " + playerSelection;
         compChoice.textContent = "computer: " + computerSelection;
        
         if( playerScore || compScore == 5 ){
            console.log('game over')
        }
    
}


// function game(){
//     for(i = 0; i < 6; i++){
//         var playerSelection = this.value;
//         var computerSelection = computerPlay();
    
//         if(i < 5){
//             playRound(playerSelection, computerSelection);
//             playerChoice.textContent = "player: " + playerSelection;
//             compChoice.textContent = "player: " + computerSelection;
//         }
//         else{
//             console.log("Game Over")
//         }
//     }
// }


