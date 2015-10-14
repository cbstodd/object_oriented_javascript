//CREATES THE RANDOM NUMBER/DICE GAME.
// var dice = {
//   sides: 6,
//   roll: function() {
//     var randomNumber = Math.floor(Math.random() * this.sides + 1);
//     return (randomNumber);
//   }
// };

//CREATES THE RANDOM NUMBER/DICE VIA OBJECT CONSTRUCTOR.
function Dice(sides) {
  this.sides = sides;
  this.roll = function() {
    var randomNumber = Math.floor(Math.random() * this.sides + 1);
    return randomNumber;
  };

}

  var diceOne = new Dice(6);
  var diceTwo = new Dice(6);


//PRINT TO PAGE FUNCTION.
function printNumber1(number) {
  var dicePlaceHolderOne = document.getElementById("dicePlaceHolderOne");
  dicePlaceHolderOne.innerHTML = number;

}

function printNumber2(number) {
  var dicePlaceholderTwo = document.getElementById("dicePlaceholderTwo");
  dicePlaceholderTwo.innerHTML = number;

}

var diceBtnOne = document.getElementById("diceBtnOne");
var diceBtnTwo = document.getElementById("diceBtnTwo");

diceBtnOne.onclick = function() {
  var rollOne = diceOne.roll();
  printNumber1("<h1>" + rollOne + "</h1>");

};

diceBtnTwo.onclick = function() {
  var rollTwo = diceTwo.roll();
  printNumber2("<h1>" + rollTwo + "</h1>");
};
