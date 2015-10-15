var rollBothDiceBtn = document.getElementById('rollBothDiceBtn');
var diceBtnOne = document.getElementById("diceBtnOne");
var diceBtnTwo = document.getElementById("diceBtnTwo");
var clearDice = document.getElementById("clearDice");

//PRINT TO PAGE FUNCTION.
function printNumberOne(number) {
	var dicePlaceHolderOne = document.getElementById("dicePlaceHolderOne");
	dicePlaceHolderOne.innerHTML = number;
}

function printNumberTwo(number) {
	var dicePlaceHolderTwo = document.getElementById("dicePlaceHolderTwo");
	dicePlaceHolderTwo.innerHTML = number;
}



//CREATES A RANDOM NUMBER.
function diceRoll() {
	var randomNumber = Math.floor(Math.random() * this.sides + 1);
	return randomNumber;
}

//CONSTRUCTOR FUNCTION TO CALL DICE AND ROLL.
function Dice(sides) {
	this.sides = sides;
	this.roll = diceRoll;
}
var diceOne = new Dice(6);
var diceTwo = new Dice(6);

rollBothDiceBtn.onclick = function () {
	var rollOne = diceOne.roll();
	printNumberOne("<h1>" + rollOne + "</h1>");
	var rollTwo = diceTwo.roll();
	printNumberTwo("<h1>" + rollTwo + "</h1>");
};

// JAVASCRIPT CLICK FUNCTION
diceBtnOne.onclick = function() {
	var rollOne = diceOne.roll();
	printNumberOne("<h1>" + rollOne + "</h1>");
};

diceBtnTwo.onclick = function() {
	var rollTwo = diceTwo.roll();
	printNumberTwo("<h1>" + rollTwo + "</h1>");
};

//JQUERY CLEARS DICE NUMBERS
$('#clearDice').click(function() {
	$("#dicePlaceHolderOne, #dicePlaceHolderTwo").each(function(index, element) {
		element.innerHTML = '';
	});
});
