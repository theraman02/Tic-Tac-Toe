let boxes = document.querySelectorAll('.box'); //selecting all boxes
let resetButton = document.querySelector('#reset'); //selecting reset button
let newgameButton = document.querySelector('#new'); //selecting new game button
let msgContainer = document.querySelector('.msg-container'); //selecting message container
let msg = document.querySelector('#msg'); //selecting message display

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('Box clicked');
        if (turnO) {                         //turnO === true
            box.innerText = 'O';
            turnO = false;
        } else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;                //disable box after click
        checkWin();
    })
});

const showWinner = (winner) => {
    msgContainer.style.display = 'block';
    msg.innerText = `Congratulations!, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    boxes.forEach((box) => {
        box.disabled = true;                //disable all boxes after win
    });
};
const checkWin = () => {
    for (let pattern of winPatterns) {
        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;

        if (box1 !== '' && box2 !== "" && box3 !== "") {
            if (box1 === box2 && box2 === box3) {
                console.log("Winner", box1);
                showWinner(box1);
            }
        }
    }
};

enableBoxes = () => {
    boxes.forEach((box) => {
        box.innerText = '';
        box.disabled = false;
    });
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    msgContainer.style.display = 'none';
    msg.innerText = '';
};



resetButton.addEventListener('click', resetGame);
newgameButton.addEventListener('click', resetGame);





