//Global variable definitions
var randomValue = 0;
var yourWins = 0;
var yourLosses = 0;
var yourScore = 0;

$(document).ready(function() {

// //First run of game when user loads page
function startGame() {

    //Generate random value between 19 and 120
    randomValue = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(randomValue);
    
    // Make random value from above the targetValue for this round
    $("#targetValue").text(randomValue);

    //Crystals 1-4 are each randomly assigned a value between 1 and 12

}

startGame();

// function playGame() {
// //When user clicks a crystal, add its randomly assigned 1-12 value to total-score counter

// //Player WINS if yourScore = target-value, wins go up by 1

// //Player LOSES if yourScore > target-value, losses go up 1

// //Game restarts upon win/loss:
//     //Total-score resets to 0
//     //New random target-value generated, displayed
//     //All 4 crystals randomly assigned 4 new hidden values
// }
// playGame();

});