// Letters being guessed
var compPick = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Guesses
var guesses = [];

// Game Log
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];


// Computer/User picks a random letter
var compPick = compPick[Math.floor(Math.random() * compPick.length)];
console.log(compPick)

// User guesses the letter
function startNewGame() {};

document.onkeypress = function(event) {
    var userPick = event.key;
    guesses.push(userPick);
    console.log(guesses);
}
if (userPick === compPick) { //Win
    wins == +1;
    console.log(userPick);
    document.querySelector(".wins")innerHTML = "Wins: " + wins;
} 
else {						// Loss
    guessesLeft == -1;
    document.querySelector(".guessesLeft")innerHTML = "Guesses Left: " - guessesLeft;
    console.log(guessesLeft);
}
