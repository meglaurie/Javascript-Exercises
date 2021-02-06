function computerPlay(){
    min = Math.ceil(0);
    max = Math.floor(1);
    var random = Math.random(min, max);
    var choice; 
    if( random >= 0 && random <= 0.3){
        choice = 'rock';
    }if(random >= 0.31 && random <= 0.61){
        choice = 'paper';
    }if(random >= 0.62 && random <= 1){
        choice = 'scissors';
    }
    return choice;
}

console.log(computerPlay());