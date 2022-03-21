const p1Button = document.querySelector("#p1btn");
const p2Button = document.querySelector("#p2btn");
const resetButton = document.querySelector("#reset");
const p1Score = document.querySelector("#p1score");
const p2Score = document.querySelector("#p2score");
const winningNumber = document.querySelector("#playUpto");

let P1Score = 0;
let P2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        P1Score += 1;
        if (P1Score === winningScore) {
            isGameOver = true;
            p1Score.classList.add("winner");
            p2Score.classList.add("loser");
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Score.innerText = P1Score;
    }
});

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        P2Score += 1;
        if (P2Score === winningScore) {
            isGameOver = true;
            p2Score.classList.add("winner");
            p1Score.classList.add("loser");
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Score.innerText = P2Score;
    }
});

winningNumber.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    P1Score = 0;
    P2Score = 0;
    p1Score.innerText = 0;
    p2Score.innerText = 0;
    p1Score.classList.remove("winner", "loser");
    p2Score.classList.remove("winner", "loser");
    p1Button.disabled = false;
    p2Button.disabled = false;
};