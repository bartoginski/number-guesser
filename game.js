// consts DOM

const roundHeader = document.querySelector(".round-header");
const targetNumber = document.querySelector(".target-num");
const addButton = document.querySelector(".add");
const substrButton = document.querySelector(".substr");
const divButtons = document.querySelector(".buttons");
//scores
const userScore = document.querySelector(".user-score");
const computerScore = document.querySelector(".computer-score");

//buttons
const guessButton = document.querySelector(".make-guess");
const roundButton = document.querySelector(".next-round");

//user input
const userInput = document.querySelector("#user-number");

//reset input
userInput.value = 0;

//generate random number 0 - 9

function getNumber() {
    let randomNum = Math.floor(Math.random() * 8 + 1);
    return randomNum;
}

function computerChoice() {
    let computerNum = Math.floor(Math.random() * 8 + 1);
    return computerNum;
}

//buttons
addButton.addEventListener("click", () => {
    userInput.stepUp(1);
});

substrButton.addEventListener("click", () => {
    userInput.stepDown(1);
});

function makeGuess() {
    //variables
    let computerInput = computerChoice();
    let userNumber = userInput.value;
    let winNumber = getNumber();
    console.log(computerInput, userNumber, winNumber);
    //disable buttons
    guessButton.disabled = true;
    guessButton.classList.add("disable-btn");
    addButton.classList.add("disable-btn");
    substrButton.classList.add("disable-btn");
    //change value header
    targetNumber.innerText = `Target number: ${winNumber}`;
}

guessButton.addEventListener("click", makeGuess);
