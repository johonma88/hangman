var inquirer = require('inquirer');
var isLetter = require('is-letter');
var prompt = require('prompt');

var wordBank = ['Jumanji','Baywatch','The Fate of the Furious','San Andreas','Hercules','The Rundown','Furious 7','Fast Five','The Scorpion King','Central Intelligence','Snitch','Fast and Furious','Walking Tall','The Game Plan','Faster','The Mummy Returns','Tooth Fairy','Race to Witch Mountain','Doom'];

console.log("Welcome to Dwayne Johnson Movie's Hangman!");
console.log("Guess a letter");
console.log("Goodluck!");
console.log("-----------------------------");
prompt.start();