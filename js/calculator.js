var addBtn = document.getElementById('add');
var subtractBtn = document.getElementById('subtract');
var multiplyBtn = document.getElementById('multiply');
var divideBtn = document.getElementById('divide');
var clearBtn = document.getElementById('clear');
var numOne = document.getElementById('numberOne');
var numberTwo = document.getElementById('numberTwo');


function printNumber(result) {
	var placeholderDiv = document.getElementById('placeholderDiv');
	placeholderDiv.innerHTML = result;
}


// var calculator = {
// 	sum: 0,
// 	add: function(numberOne, numberTwo) {
// 		this.sum = (numOne + numTwo);
// 		return sum;
// 	},
// 	subtract: function(numberOne, numberTwo) {
// 		 this.sum = (numOne - numTwo);
// 		 return sum;
// 	},
// 	multiply: function(numberOne, numberTwo) {
// 		this.sum = (numOne * numTwo);
// 		return sum;
// 	},
// 	divide: function(numberOne, numberTwo) {
// 		this.sum = (numOne / numTwo);
// 	},
// 	clear: function() {
// 		this.sum = 0;
// 		return this.sum;
// 	},
// 	equals: function() {
// 		return this.sum;
// 	}
// };

addBtn.onclick = function(numberOne, numberTwo) {
	var result = numOne + numTwo;
	return result;
};

subtractBtn.onclick = function(numberOne, numberTwo) {
	var result = numOne - numTwo;
	return result;
};

multiplyBtn.onclick = function(numberOne, numberTwo) {
	var result = numOne * numTwo;
	return result;
};

divideBtn.onclick = function(numberOne, numberTwo) {
	var result = numOne / numTwo;
	return result;
};

clearBtn.onclick = function(numberOne, numberTwo) {
	var result = 0;
	return result;
};
