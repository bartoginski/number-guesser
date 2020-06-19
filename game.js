// consts DOM

const roundHeader = document.querySelector(".round-header");
const targetNumber = document.querySelector(".targer-num");
const addButton = document.querySelector(".add");
const substrButton = document.querySelector(".substr");

//scores
const userScore = document.querySelector(".user-score");
const computerScore = document.querySelector(".computer-score");

//buttons
const guessButton = document.querySelector(".make-guess");
const roundButton = document.querySelector(".next-round");

//user input
const userInput = document.querySelector("#user-number");

//generate random number 0 - 9

function getNumber() {
    let randomNum = Math.floor(Math.random() * 8 + 1);
    return randomNum;
}

//buttons
addButton.addEventListener("click", () => {
    userInput.stepUp(1);
});

substrButton.addEventListener("click", () => {
    userInput.stepDown(1);
});
