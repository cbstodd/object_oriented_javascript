function printMessage(contact) {
	var placeholderDiv = document.getElementById('placeholderDiv');
	placeholderDiv.innerHTML = contact;
}


//CREATES THE RANDOM NUMBER/DICE VIA OBJECT CONSTRUCTOR.
function Dice(sides) {
  this.sides = sides;
  this.roll = function() {
    var randomNumber = Math.floor(Math.random() * this.sides + 1);
    return randomNumber;
  };
}
var dice = new Dice(6);
var dice10 = new Dice(10);

printMessage(dice.roll === dice10.roll);
