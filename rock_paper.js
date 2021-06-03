
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score') ;
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result>p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function getComputerChoices(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter=== 'r'){
        return 'Rock';
    }
    if(letter === 'p'){
        return 'Paper';
    }
    if(letter === 's'){
        return 'Scissors'
    }

}

function win(user,computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUser = 'user'.fontsize(3).sub();
    const smallComp = 'comp'.fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(user)} ${smallUser}  beats  ${convertToWord(computer)} ${smallComp} you win !!`
    
   
}


function loose(user, computer){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUser = 'user'.fontsize(3).sub();
    const smallComp = 'comp'.fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(user)} ${smallUser} looses to  ${convertToWord(computer)} ${smallComp} you lost !!`

}


function draw(user, computer){
    const smallUser = 'user'.fontsize(3).sub();
    const smallComp = 'comp'.fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(user)} ${smallUser}  equals  ${convertToWord(computer)} ${smallComp} its draw ..!!`

}

function game(userChoice){
    const computerChoice = getComputerChoices();
    switch(userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            loose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice,computerChoice);
            break;
    }

}

function main(){

rock_div.addEventListener('click', function(){
  game('r');
})
paper_div.addEventListener('click', function(){
   game('p');
})
scissors_div.addEventListener('click', function(){
   game('s');
})
}

main();