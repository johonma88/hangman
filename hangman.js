var inquirer = require('inquirer');
var isLetter = require('is-letter');
var prompt = require('prompt');

var wordBank = ['Jumanji','Baywatch','The Fate of the Furious','San Andreas','Hercules','The Rundown','Furious 7','Fast Five','The Scorpion King','Central Intelligence','Snitch','Fast and Furious','Walking Tall','The Game Plan','Faster','The Mummy Returns','Tooth Fairy','Race to Witch Mountain','Doom'];
console.log("Welcome to Dwayne Johnson Movie's Hangman!");
console.log("Goodluck!");
console.log("-----------------------------");

prompt.start();

var game = function () {
    this.wordToguess = wordBank[Math.floor((Math.random()* (wordBank.length))+1)];
    this.wordWon = 0;
    this.guessRemaining = 10;
    this.startGame = () => {
      
        this.guessRemaining = 10;
        var newWordResult =[];
        var wordToGuess = wordBank[Math.floor((Math.random()* (wordBank.length))+1)];
            for (var i=0; i<wordToGuess.length; i++)
            {
                 newWordResult.push("_");
             }
             console.log(this.wordToguess);
             console.log(newWordResult);
        }
       
        var questions = [
            {
                message: "Guess a letter?",
                type: "input",
                name: "letter",
            }];
          
    }
    this.checkLetter = (letter) => {

    }

    

    var newGame = new game();
    newGame.startGame();
