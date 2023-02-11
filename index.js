const rockbtn = document.getElementById("btn-rock");
const paperbtn = document.getElementById("btn-paper");
const scissorbtn = document.getElementById("btn-Scissor");
const userchoise = document.getElementById("user-choise");
const computerchoise = document.getElementById("computer-choise");
const result = document.getElementById("result");
const userscore = document.getElementById("user-score");
const computerscore = document.getElementById("computer-score");

let cmpScore = 0;
let usrScore = 0;


 const increment = (string) => {
  if (string === "computer") {
    cmpScore++;
   computerscore.innerHTML = cmpScore;
   } else if (string === "user") {
   usrScore++;
       userscore.innerHTML = usrScore;
  }
 };

const runGame = (string) => {
  const userInput = string;
  const values = ["Rock", "Paper", "Scissor"];

  const randomnumber = Math.floor(Math.random() * 3);
  const computerInput = values[randomnumber];

  userchoise.innerHTML = "You picked " + userInput;
  computerchoise.innerHTML = "Computer picked " + computerInput;

  if (userInput === "Rock") {
    if (computerInput === "Rock") {
      result.innerHTML = "Draw";
    } else if (computerInput === "Paper") {
      result.innerHTML = "You lose";
      increment("computer");
    } else {
      result.innerHTML = "You win";
      increment("user");
    }
  } else if (userInput === "Paper") {
    if (computerInput === "Paper") {
      result.innerHTML = "Draw";
    } else if (computerInput === "Scissor") {
      result.innerHTML = "You lose";
      increment("computer");
    } else {
      result.innerHTML = "You win";
      increment("user");
    }
  } else if (userInput === "Scissor") {
    if (computerInput === "Scissor") {
      result.innerHTML = "Draw";
    } else if (computerInput === "Rock") {
      result.innerHTML = "You lose";
      increment("computer");
    } else {
      result.innerHTML = "You win";
      increment("user");
    }
  }
};

rockbtn.addEventListener("click", () => {
  runGame("Rock");
});

paperbtn.addEventListener("click", () => {
  runGame("Paper");
});

scissorbtn.addEventListener("click", () => {
  runGame("Scissor");
});





    
