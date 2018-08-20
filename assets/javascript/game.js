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

    // Fill array crystalValues with 4 random numbers between 1 and 12
    var crystalValues = [];
    for (var i = 0; i < 4; i++) {
        crystalValues.push(Math.round(Math.random() * 12))
        console.log(crystalValues);
    }

    // Assign these 4 numbers to respective crystal buttons
    $('#crystal1').attr("value", crystalValues[0]);
        console.log("Crystal 1 value - test", crystalValues[0]);
    $('#crystal2').attr("value", crystalValues[1]);
    $('#crystal3').attr("value", crystalValues[2]);
    $('#crystal4').attr("value", crystalValues[3]);

}

startGame();

// function playGame() {
// //When user clicks a crystal, add its randomly assigned value to total-score counter

// //Player WINS if yourScore = target-value, wins go up by 1

// //Player LOSES if yourScore > target-value, losses go up 1

// //Game restarts upon win/loss:
//     //Total-score resets to 0
//     //New random target-value generated, displayed
//     //All 4 crystals randomly assigned 4 new hidden values
// }
// playGame();

});