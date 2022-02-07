function validateForm() {
	var pw1 = document.getElementById("pswd1").value;
	var pw2 = document.getElementById("pswd2").value;
	var name1 = document.getElementById("uname").value;

	if (name1 == "") {
		document.getElementById("blankMsg").innerHTML = "Fill the first name";
		return false;
	}

	if (pw1 == "") {
		document.getElementById("message1").innerHTML = "Fill the password please!";
		return false;
	}

	if (pw2 == "") {
		document.getElementById("message2").innerHTML = "Enter the password please!";
		return false;
	}

	if (pw1 != pw2) {
		document.getElementById("message2").innerHTML = "Passwords are not same";
		return false;
	} else {
		document.write("Successful user registration.");
	}
}  
