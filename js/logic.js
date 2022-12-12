let you;
let yorScore = 0;
let opponent;
let opponentScore = 0;
let choices = ["Rock", "Paper", "Scissors"];

window.onload = function () {
  for (let i = 0; i < 3; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectOption);
    document.getElementById("choices").append(choice);
  }
};
function selectOption() {
  you = this.id;
  document.getElementById("yourChoice").src = you + ".png";

  opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("opponenChoice").src = opponent + ".png";

  if (you == opponent) {
    yorScore += 1;
    opponentScore += 1;
  } else {
    if (you == "Rock") {
      if (opponent == "Scissors") {
        yorScore += 1;
      } 
      else if (opponent == "Paper") {
        opponentScore += 1;
      }
    } 
    else if (you == "Scissors") {
      if (opponent == "Paper") {
        yorScore += 1;
      } else if (opponent == "Rock") {
        opponentScore += 1;
      }
    } 
    else if (you == "Paper") {
      if (opponent == "Rock") {
        yorScore += 1;
      } else if (opponent == "Scissors") {
        opponentScore += 1;
      }
    }
    document.getElementById("yourScore").innerText = yorScore + " :Your Score";
    document.getElementById("opponentScore").innerText =
      opponentScore + " :Opponent Score";
  }
}
