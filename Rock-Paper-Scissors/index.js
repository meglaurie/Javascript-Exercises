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
const allBtns = document.querySelectorAll('button'); 

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


function btnVal (){
    for( var i = 0; i < allBtns.length; i++){
        allBtns[i].addEventListener('clicked', function(){
            console.log('clicked');
        });
    }
}

btnVal();


// btns.forEach((btn) =>{
//     btn.addEventListener('click', (e) =>{
//         var playerChoice = btnsVal;
//         console.log(playerChoice);
//         console.log(e.target);
//         console.log('clicked');
//     });

// })


// btn.addEventListener('click', (e) =>{
//     e.target.style.background = 'blue';
//     console.log(e);
//   });
  

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    // if( playerSelection != 'rock' || 'paper' || 'scissors'){
    //     prompt('error please enter rock paper or scissors.');
    // }
   
    if(playerSelection ==  computerSelection){
        console.log('tie');
    }else if((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')){
        console.log("player wins");

    }else if((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')){
            console.log("computer wins");
        }

    

    }
    

// function game(){
//     for(i = 0; i < 6; i++){
//         var playerSelection = prompt("Rock, paper, scissors?");
//         var computerSelection = computerPlay();
//         if(i < 5){
//          playRound(playerSelection, computerSelection);
//          console.log("player: " + playerSelection);
//          console.log("computer: " + computerSelection);
//         }
//         else{
//             console.log("Game Over")
//         }
//     }
// }
 

function game(){
    
        var playerSelection = prompt("Rock, paper, scissors?");
        var computerSelection = computerPlay();
       
         playRound(playerSelection, computerSelection);
         console.log("player: " + playerSelection);
         console.log("computer: " + computerSelection);
        
    
}

// game(); 

