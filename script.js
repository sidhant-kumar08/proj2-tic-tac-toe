
//selecting all the elements to use them and manipulate them

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



//event listeners to perform actions 




// use to toggle turn of both players
let turnO = true;


//winner patterns to check winner

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


//function to change turn of the players

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        
        //check player turns and change them
        if (turnO) {
            box.innerText = "O"; //player O turn
            turnO = false;
        } else {
            box.innerText = "X"; //player X turn
            turnO = true;
        }
        box.disabled = true;

        checkwinner()
    })
})

//show winner on screen function

const showwinner = (winner) => {
    msg.innerText = `Winner is : ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledbox();
}

const disabledbox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledbox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}

//check winner function 

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;


        if(pos1val != "" && pos2val != "" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log(`winner ${pos1val}`)
                showwinner(pos1val)
                
            }
        }

    }


}

// reset game function

const resetgame = () => {
    turnO = true
    enabledbox();
    msgcontainer.classList.add("hide")
}

newgamebtn.addEventListener('click', resetgame);
resetBtn.addEventListener('click', resetgame)
