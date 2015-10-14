//PRINT TO PAGE FUNCTION.
function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

//CREATES BUTTON VARIABLE FOR THE BUTTON ID.
var button = document.getElementById("button");

//CALLS THE DICE.ROLL WHEN BUTTON IS CLICKED.
button.onclick = function() {
  var result = dice.roll();
  printNumber("<h1>" + result + "</h1>");
};

//CREATES THE RANDOM NUMBER/DICE GAME.
var dice = {
  sides: 6,
  roll: function() {
    var randomNumber = Math.floor(Math.random() * this.sides + 1);
    return (randomNumber);
  }
};
