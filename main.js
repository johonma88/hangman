
// Link in the Inquirer Package
var inquirer = require('inquirer');

// Link the list of random words
var guessWordList = require('./game.js');

// Link in the word tester
var checkForLetter = require('./word.js');

// Link in the letters to display
var lettersToDisplay = require('./letter.js');



// ----------------------------- Global Variables -----------------------------
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lettersAlreadyGuessed = [];
var lettersCorrectlyGuessed = [];      
var displayHangman;




// ----------------------------- Game Object -----------------------------

var game = {

  wordBank : guessWordList, // import a list of words
  guessesRemaining : 10, // per word
  currentWrd : null, // the word object


  startGame : function(){
    // make sure the user has 10 guesses
    this.guessesRemaining = 10;

    // get a random word from the array
    var j = Math.floor(Math.random() * this.wordBank.length);
    this.currentWrd = this.wordBank[j];

    // Inform User game has begun
    console.log('Guess which Programming Language is?');

    // Show the empty letters ( _ _ _ _ ) and guesses, etc.
    displayHangman = new lettersToDisplay(this.currentWrd);
    displayHangman.parseDisplay();
    console.log('Guesses Left: ' + game.guessesRemaining);

    // prompt for a letter
    keepPrompting();
  }

};

function keepPrompting(){

  // Always make a gap between inputs
  console.log('');

  // If enough guesses left, then prompt for new letter
  if(game.guessesRemaining > 0){
    inquirer.prompt([
      {
        type: "value",
        name: "letter",
        message: "Guess a Letter: "
      }
    ]).then(function(userInput){

      // Collect Letter Input and lower case the letter
      var inputLetter = userInput.letter.toLowerCase();
      
      // Valid input
      if(alphabet.indexOf(inputLetter) == -1){

        // Tell user they did not guess a letter
        console.log('What are you doing! "' + inputLetter + '" is not a letter. Try again!');
        console.log('Guesses Left: ' + game.guessesRemaining);
        console.log('Letters already guessed: ' + lettersAlreadyGuessed);
        keepPrompting();

      }
      else if(alphabet.indexOf(inputLetter) != -1 && lettersAlreadyGuessed.indexOf(inputLetter) != -1){

        // Tell user they already guessed that letter
        console.log('You already guessed "' + inputLetter + '". Try again!');
        console.log('Guesses Left: ' + game.guessesRemaining);
        console.log('Letters already guessed: ' + lettersAlreadyGuessed);
        keepPrompting();

      }
      else{

        // Remove the entry from the list of possible inputs
        lettersAlreadyGuessed.push(inputLetter);


        // Check for the letter in the word
        var letterInWord = checkForLetter(inputLetter, game.currentWrd);

        // If the letter is in the word, update the letter object
        if(letterInWord){

          // Add to correct letters list
          lettersCorrectlyGuessed.push(inputLetter);

          // Show the empty letters ( _ _ _ _ ) and guesses, etc.
          displayHangman = new lettersToDisplay(game.currentWrd, lettersCorrectlyGuessed);
          displayHangman.parseDisplay();


          // Test if the user has won
          if(displayHangman.winner){
            console.log('You win! Congratulations!');
            return;
          }
          // Not a win yet, so ask for another input and decrement guesses
          else{
            console.log('Guesses Left: ' + game.guessesRemaining);
            console.log('Letters already guessed: ' + lettersAlreadyGuessed);
            keepPrompting();
          }

        }
        // Otherwise, decrement guesses and re-prompt the old hangman object
        else{
          game.guessesRemaining--;

          displayHangman.parseDisplay();
          console.log('Guesses Left: ' + game.guessesRemaining);
          console.log('Letters already guessed: ' + lettersAlreadyGuessed);
          keepPrompting();
        }
        
      }

    });
    
  }
  // If not enough guesses left, then user losses
  else{
    console.log('Try again!!!');
    console.log('The word was "' + game.currentWrd + '".');
  }

}


// Create a new game object using the constructor and begin playing
game.startGame();