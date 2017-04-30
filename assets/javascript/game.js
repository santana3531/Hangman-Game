// Letters being guessed
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Guesses
var guesses = [];

// Game Log
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];

// Computer/User picks a random letter
var compPick = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(compPick)

// User guesses the letter
function startNewGame() {};

document.onkeypress = function(event) {
        var userPick = event.key;
        guesses.push(userPick);
        console.log(guesses);
}
        if (userPick === compPick) {		//Win
            wins == + 1;
            console.log(userPick);
            document.getElementById(".wins")innerHTML = "Wins: " + wins;
            guesses = [];
        }
