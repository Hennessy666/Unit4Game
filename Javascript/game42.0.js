var wins = 0;
var lose = 0;

$('#wins').text(wins);
$('#lose').text(lose);

// Reset game
function retry() {
    randomnumb = Math.floor(Math.random() * 50);
    numLightPurple = Math.floor(Math.random() * 14) + 1;
    numPurple = Math.floor(Math.random() * 14) + 1;
    numBlue = Math.floor(Math.random() * 14) + 1;
    numWhite = Math.floor(Math.random() * 14) + 1;
    playerTotal = 0;
    $('#scoreToMatch').text(randomnumb);
    $('#totalScore').text(playerTotal);
};

// Display wins
function Winner() {
    wins++;
    $('#wins').text(wins);
    retry();
    alert("Congratulations! You have Won!");
}
// Display loss
function loser() {
    lose++;
    $('#lose').text(lose);
    retry();
    alert("You lost!");
}

function checkWinnerOrLoser() {
    if (playerTotal == randomnumb) {
        Winner();
    }
    else if (playerTotal >= randomnumb) {
        loser();
    }
}

// when clicking on a crystal
$('#lightpurple').on('click', function () {
    playerTotal = playerTotal + numLightPurple;
    console.log("Player total is" + playerTotal);
    $('#totalScore').text(playerTotal);
    checkWinnerOrLoser();
})

$('#purple').click(function () {
    playerTotal += numPurple;
    console.log("Player total is" + playerTotal);
    $('#totalScore').text(playerTotal);
    checkWinnerOrLoser();
});

$('#blue').on('click', function () {
    playerTotal = playerTotal + numBlue;
    console.log("Player total is" + playerTotal);
    $('#totalScore').text(playerTotal);
    checkWinnerOrLoser();
});  

$('#white').on('click', function () {
    playerTotal = playerTotal + numWhite;
    console.log("Player total is" + playerTotal);
    $('#totalScore').text(playerTotal);
    checkWinnerOrLoser();
});

retry();