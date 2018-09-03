// Creat an array that lists out all of the options (Letters A~Z)
var lettersOnMyMind = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Create variables to hold the number of wins, losses, guessesLeft, userGuessesSoFar
var wins = 0;
var losses = 0;
var guesses = 12;
var guessesLeft = 12;
var guessedLetters = [];
var letterToGuess = null;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");
var userGuessText = document.getElementById("userGuess");    


// Randomly choose a choice from the options array. This is the letter on my mind.
var computerChoice = lettersOnMyMind[Math.floor(Math.random() * lettersOnMyMind.length)];

// Update guesses left.
var updateGuessesLeft = function() {
    document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessesLeft;
};


// Updated letters on my mind.
var updateLetterToGuess = function () {
    this.letterToGuess = this.lettersOnMyMind[Math.floor(Math.random() * this.lettersOnMyMind.length)];
};

// Update Guesses so far.
var updateGuessesSoFar = function () {
    document.querySelector("#userGuess").innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

// Reset the game.
var reset = function () {
    guessesLeft = 12;
    guessedLetters = [];

    updateGuessesLeft();
    updateLetterToGuess();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesSoFar();

// This function is run whenever the user press a key.
document.onkeyup = function(event) {
    guessesLeft--;
// Determines which key was pressed.
    var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

guessedLetters.push(userChoice);
updateGuessesLeft();
updateGuessesSoFar();

// This logic determines the outcome of the game.
if (guessesLeft > 0) {
    if (userChoice === computerChoice) {
   wins++;
   document.querySelector("#wins").innerHTML = "Wins: " + wins;
   reset();}

} else if (guessesLeft === 0) {
    losses++;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    reset();
}
};