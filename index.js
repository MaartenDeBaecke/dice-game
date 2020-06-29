var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelectorAll("img")[3].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[4].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2){
  document.querySelector("p").textContent = "Player 1 is the Winner!";
} else if (randomNumber1 < randomNumber2){
  document.querySelector("p").textContent = "Player 2 Wins!";
} else {
  document.querySelector("p").textContent = "No winner, no chicken dinner... ";
}
