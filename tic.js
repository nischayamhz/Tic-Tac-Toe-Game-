let boxes = document.querySelectorAll(".box");
let restartBtn = document.getElementById("restartBtn");
let status = document.getElementById("status");

let turnO = true;

const winCombos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

// click boxes
boxes.forEach(box => {
    box.addEventListener("click", () => {

        if (box.innerText !== "") return;

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        checkWinner();
        checkDraw();
    });
});

// check winner
function checkWinner() {

    for (let combo of winCombos) {

        let a = boxes[combo[0]].innerText;
        let b = boxes[combo[1]].innerText;
        let c = boxes[combo[2]].innerText;

        if (a !== "" && a === b && b === c) {
            status.innerText = a + " Wins!";
            disableBoxes();
        }
    }
}
// check draw
function checkDraw() {

    let filled = 0;

    boxes.forEach(box => {
        if (box.innerText !== "") {
            filled++;
        }
    });

    if (filled === 9) {
        status.innerText = "It's a Draw!";
    }
}

// disable boxes
function disableBoxes() {
    boxes.forEach(box => {
        box.style.pointerEvents = "none";
    });
}

// restart game
restartBtn.addEventListener("click", () => {

    boxes.forEach(box => {
        box.innerText = "";
        box.style.pointerEvents = "auto";
    });

    turnO = true;
    status.innerText = "Player X's Turn";
});