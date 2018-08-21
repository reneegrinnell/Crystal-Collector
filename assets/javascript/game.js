//Global variable definitions
var randomValue = 0;
var yourWins = 0;
var yourLosses = 0;
var yourScore = 0;

$(document).ready(function() {

// //First run of game when user loads page
function setUpGame() {

    // Generate random value between 19 and 120
    randomValue = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(randomValue);
    
    // Display the random value from above as the targetValue for this round
    $("#targetValue").text(randomValue);

    // Fill array crystalValues with 4 random numbers between 1 and 12
    var crystalValues = [];
    for (var i = 0; i < 4; i++) {
        crystalValues.push(Math.round(Math.random() * 12))
        console.log(crystalValues[i]);
    }

    //Working on 4 DISTINCT random values (no repeats)...

    // var crystalValues = [];
    // while (crystalValues.length < 4) {
    //     var randomnumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    //     if (crystalValues.indexOf(randomnumber) > -1) continue;
    //     crystalValues[crystalValues.length] = randomnumber;
    // }
    // console.log(arr);


    // Assign these 4 numbers to respective crystal buttons
    $("#crystal1").attr("value", crystalValues[0]);
        console.log("Crystal 1 value - test", crystalValues[0]);

    $("#crystal2").attr("value", crystalValues[1]);
        console.log("Crystal 2 value - test", crystalValues[1]);

    $("#crystal3").attr("value", crystalValues[2]);
        console.log("Crystal 3 value - test", crystalValues[2]);

    $("#crystal4").attr("value", crystalValues[3]);
        console.log("Crystal 4 value - test", crystalValues[3]);

}
setUpGame();

// Event listener to start game play when user clicks a crystal button
$(".crystalButton").on("click", playGame);

function playGame() {

    //Add value of each clicked crystal to yourScore
    yourScore = yourScore + (Number($(this).attr("value")));
    $("#currentScore").text(yourScore);

    //Player WINS if yourScore = target-value, wins go up by 1

    // Player LOSES if yourScore > target-value, losses go up 1

    // Game restarts upon win/loss:
         //Total-score resets to 0
         //New random target-value generated, displayed
         //All 4 crystals randomly assigned 4 new hidden values
}

});