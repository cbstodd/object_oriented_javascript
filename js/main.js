function printMessage(contact) {
	var placeholderDiv = document.getElementById('placeholderDiv');
	placeholderDiv.innerHTML = contact;
}

function Contact(name, email) {
	//this={};
	this.name = name;
	this.email = email;
}
var contact1 = new Contact("Colin", 'cbstodd@gmail.com');


printMessage(contact1.name);
printMessage(contact1.email);
