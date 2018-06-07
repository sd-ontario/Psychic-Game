
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var loss = 0;
var guessesLeft = 9;
var guessedLetters = [];
var secretLetters = [];

window.onload = function() {
	var secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
	secretLetters.push(secretLetter);
	console.log(secretLetters[0]);
}

document.onkeyup = function(event) {
	var addKey = event.key;
	

	console.log(secretLetters[0]);

	if (guessedLetters.indexOf(addKey)>-1){
		alert("You've already guessed that key!");
		return;
	}
	if (event.keyCode >= 65 && event.keyCode <= 90){
		
		

		guessedLetters.push(addKey);

		if ((addKey === secretLetters[0]) && (guessesLeft > 0)) {
			win++;
			guessesLeft = 9;
			guessedLetters.length = 0;
			secretLetters.length = 0;
			var secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
			secretLetters.push(secretLetter);
			console.log(secretLetters[0]);
		}

		else if ((addKey !== secretLetters[0]) && (guessesLeft > 0)) {
			guessesLeft--
		}

		else {
			loss++;
			guessesLeft = 9;
			guessedLetters.length = 0;
			secretLetters.length = 0;
			var secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
			secretLetters.push(secretLetter);
			console.log(secretLetters[0]);
		}

		var script = "<p>Guess what letter I'm thinking of!</p>" +
				"<br>" + 
				"<p>Wins: " + win + "</p>" + "<br>" + 
				"<p>Losses: " + loss + "</p>" + "<br>" + 
				"<p>You have " + guessesLeft + " guesses left</p>" + "<br>" +
				"<p>You've guessed " + guessedLetters + "</p>";
		
		document.querySelector("#mainText").innerHTML = script;

}
else{
	alert("Please press a letter");
	return;
}
	}



	