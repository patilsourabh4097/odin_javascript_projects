const playerText = document.getElementById('playText');
const boxes = Array.from(document.getElementsByClassName('box'));
// console.log(boxes)
const restartBtn = document.getElementById('restartButton');
const spaces = [null,null,null,null,null,null,null,null,null];
const O_text = 'O';
const X_text = 'X';
let currentPlayer = O_text;

const drawBoard = () => {
    boxes.forEach((box,index) =>{
        let borderOfBox = ''
        if(index<3){
            borderOfBox += 'border-bottom: 3px solid var(--purple);';
        }
        if(index%3 === 0){
            borderOfBox += 'border-right: 3px solid var(--purple);';
        }
        if(index%3 === 2){
            borderOfBox += 'border-left: 3px solid var(--purple);';
        }
        if(index>5){
            borderOfBox += 'border-top: 3px solid var(--purple);';
        }
        box.style = borderOfBox
        box.addEventListener('click', boxClicked)
    })
}

const boxClicked = (e) => {
    const id = e.target.id;
    console.log(id)
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        
        if(playerHasWon()){
            playerText.innerText = `${currentPlayer} has won`;
            return;


        }
        currentPlayer = currentPlayer === O_text ? X_text : O_text;
    }
};

const playerHasWon = ()=>{
    if(spaces[0] === currentPlayer){
        if(spaces[1]===currentPlayer && spaces[2]===currentPlayer){
            console.log(` ${currentPlayer} has won at top`);
            return true;
        }
        if(spaces[3]===currentPlayer && spaces[6]===currentPlayer){
            console.log(` ${currentPlayer} has won left`);
            return true;
        }
        if(spaces[4]===currentPlayer && spaces[8]===currentPlayer){
            console.log(` ${currentPlayer} has diagonally`);
            return true;
        }
    } if(spaces[8] === currentPlayer){
        if(spaces[7]===currentPlayer && spaces[6]===currentPlayer){
            console.log(` ${currentPlayer} has won at bottom`);
            return true;
        }
        if(spaces[2]===currentPlayer && spaces[5]===currentPlayer){
            console.log(` ${currentPlayer} has won right`);
            return true;
        }
       
    } if(spaces[4] === currentPlayer){
        if(spaces[1]===currentPlayer && spaces[7]===currentPlayer){
            console.log(` ${currentPlayer} has won at vertically`);
            return true;
        }
        if(spaces[3]===currentPlayer && spaces[5]===currentPlayer){
            console.log(` ${currentPlayer} has won at horizontally`);
            return true;
        }
       
    }
};

restartBtn.addEventListener('click', ()=> {
    spaces.forEach((space,index) =>{
        spaces[index] = null;
    })
    boxes.forEach(box => {
        box.innerText = '';
    })
    playerText.innerText = `Lets Play`;
    currentPlayer= O_text;
    
})




drawBoard()