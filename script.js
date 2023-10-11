const guess = document.getElementById("guess");
const temp = document.getElementById("temp");
const log = document.getElementById("log");
const hint = document.getElementById("hint");
const oneButton = document.getElementById("1");
const twoButton = document.getElementById("2");
const threeButton = document.getElementById("3");
const clearButton = document.getElementById("clearbutton");

oneButton.addEventListener("click", addNum);
twoButton.addEventListener("click", addNum);
threeButton.addEventListener("click", addNum);
clearButton.addEventListener("click", clear);

// initializes the number that the user must guess
function initialize(){
  digit1 = Math.floor(Math.random() * 3) + 1;
  digit2 = Math.floor(Math.random() * 3) + 1;
  digit3 = Math.floor(Math.random() * 3) + 1;
  code = "" + digit1 + digit2 + digit3;
  timeRemaining = 7;
  display();
}

// when user clicks on a certain button, it will add that value to the screen
// if a user's guess is 3 characters long, then it wil check if the guess is equal to the true value. If it is, then the 
function addNum(){
  if (temp.innerHTML.length < 3){
    temp.innerHTML = "" + temp.textContent + this.id;
  } 
  if (temp.innerHTML.length == 3){
    var playerGuess = temp.textContent * 1;
    var answer = code * 1;
    var text = "";
    if (temp.innerHTML == code){
      window.location.href = "victory.html";
    } else if (playerGuess > answer){
      hint.innerHTML = "<b><u>Hint:</u></b> The code is actually a <b>lower</b> value!";
      text = "The code is lower than this guess.";
    } else {
      hint.innerHTML = "<b><u>Hint:</u></b> The code is actually a <b>higher</b> value!";
      text = "The code is higher than this guess.";
    }
    var time = timeRemaining;
    timeRemaining--;
    if (timeRemaining == 0){
      window.location.href = "lost.html";
    }
    if (time == 7){
      log.innerHTML += temp.textContent + ": " + text;
    } else {
      log.innerHTML = log.innerHTML + "<br>" + temp.textContent + ": " + text;
    }

    clear();
    display();
  }
}

// clears the user's guess
function clear(){
  temp.textContent = "";
}

// updates the remaining time
function display(){
  clock.innerHTML = "Time remaining: " + timeRemaining;
}
