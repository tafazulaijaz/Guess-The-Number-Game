let userInput = document.querySelector("#userInp");
let secretNumber = Math.floor(Math.random() * 20) + 1;
let AttemptCount = 0;
const guessButton = document.querySelector("#guessBtn");
let guessNumber = document.querySelector("#computerRsp");
let Attempts = document.querySelector("#totalAttempt");
const resetButton = document.querySelector("#resetBtn");
guessButton.addEventListener("click", function () {
  AttemptCount = AttemptCount + 1;
  Attempts.innerText = "attempts:" + AttemptCount;
  const typedNumber = Number(userInput.value);
     if (typedNumber < secretNumber) {
    guessNumber.innerText = "wrong to Low " + typedNumber;
    guessNumber.style.color = "red";
  } else if (typedNumber > secretNumber) {
    guessNumber.innerText = "Wrong Too high " + typedNumber;
    guessNumber.style.color = "red";
  } else {
    guessNumber.innerText = "correct " + typedNumber;
    guessNumber.style.color = "green";
     guessButton.disabled = true;
  }
    if (AttemptCount >= 5 && typedNumber !== secretNumber) {
    guessButton.disabled = true;
  }
});

resetButton.addEventListener("click", function () {
  AttemptCount = 0;
  guessButton.disabled = false
  Attempts.innerText = "Attempts:" + AttemptCount;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  userInput.value = "";
  guessNumber.innerText = "start Guessing";
  guessNumber.style.color = "black";
});

