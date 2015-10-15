//PRINT TO PAGE FUNCTION.
function printNumberOne(number) {
  var dicePlaceHolderOne = document.getElementById("dicePlaceHolderOne");
  dicePlaceHolderOne.innerHTML = number;
}

function printNumberTwo(number) {
  var dicePlaceHolderTwo = document.getElementById("dicePlaceHolderTwo");
  dicePlaceHolderTwo.innerHTML = number;
}

var diceBtnOne = document.getElementById("diceBtnOne");
var diceBtnTwo = document.getElementById("diceBtnTwo");
var clearDice = document.getElementById("clearDice");

diceBtnOne.onclick = function() {
  var rollOne = diceOne.roll();
  printNumberOne("<h1>" + rollOne + "</h1>");

};
diceBtnTwo.onclick = function() {
  var rollTwo = diceTwo.roll();
  printNumberTwo("<h1>" + rollTwo + "</h1>");

};


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

//JQUERY CLEARS DICE NUMBERS.
$(document).ready(function() {
  $('#clearDice').click(function() {
    $("#dicePlaceHolderOne, #dicePlaceHolderTwo").each(function(index, element) {
      element.innerHTML = '';
    });
  });

});//END jQuery
