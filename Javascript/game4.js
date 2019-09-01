

//code to generate a random number to guess


var randomnumb = Math.floor(Math.random() * 50);



//display random number

$('#scoreToMatch').text(randomnumb)

//random numbers  for each crystal, between 1 and 15

var numLightPurple = Math.floor(Math.random() * 14)+1;
var numPurple = Math.floor(Math.random() * 14)+1;
var numBlue = Math.floor(Math.random() * 14)+1;
var numWhite = Math.floor(Math.random() * 14)+1;

//variables

var playerTotal = 0;
var wins = 0;
var lose = 0;

$('#wins').text(wins);
$('#lose').text(lose);
// Reset game
function retry() {
    Random = Math.floor(Math.random() * 50);
    console.log(Random)
    $('#scoreToMatch').text(Random);
    numLightPurple = Math.floor(Math.random() * 14)+1;
    numPurple = Math.floor(Math.random() * 14)+1;
    numBlue = Math.floor(Math.random() * 14)+1;
    numWhite = Math.floor(Math.random() * 14)+1;
    playerTotal = 0;
    $('#totalScore').text(playerTotal);
};



// Display wins
function Winner() {
    alert("Congrats! You won!");
    wins++;
    $('#wins').text(wins);
    retry();
}
// Display loss
function loser() {
    alert("You lost!");
    lose++;
    $('#lose').text(lose);
    retry()
}

// when clicking on a crystal

$('#lightpurple').on('click', function () {
    playerTotal = playerTotal + numLightPurple;
    console.log("Player total is" + playerTotal);
    $('#totalScore').text(playerTotal);

    //win/lose

    if (playerTotal == randomnumb) {
        Winner();
    }
    else if (playerTotal > randomnumb) {
        loser();
    }
})

$('#purple').click( function () {
    playerTotal += numPurple;
    console.log("Player total is" + playerTotal);
    $('#totalScore').text(playerTotal)});

    //win/lose

    if (playerTotal == randomnumb) {
        Winner();
    }
    else if (playerTotal > randomnumb) {
        loser();
    }

    $('#blue').on('click', function () {
        playerTotal = playerTotal + numBlue;
        console.log("Player total is" + playerTotal);
        $('#totalScore').text(playerTotal);

        //win/lose

        if (playerTotal == randomnumb) {
            Winner();
        }
        else if (playerTotal > randomnumb) {
            loser();
        }


        $('#white').on('click', function () {
            playerTotal = playerTotal + numWhite;
            console.log("Player total is" + playerTotal);
            $('#totalScore').text(playerTotal);

            //win/lose

            if (playerTotal == randomnumb) {
                Winner();
            }
            else if (playerTotal > randomnumb) {
                loser();
            }
        });

    });  
