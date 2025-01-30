let gamePattern = new Array();
let userPattern = new Array();
let gameActive = false;

let gameSounds = {
    green: new Audio("./sounds/green.mp3"),
    red: new Audio("./sounds/red.mp3"),
    yellow: new Audio("./sounds/yellow.mp3"),
    blue: new Audio("./sounds/blue.mp3"),
    wrong: new Audio("./sounds/wrong.mp3"),
};

function animatePress(colorName) {
    let pressedButton = $(`#${colorName}`);
    pressedButton.fadeOut(80).fadeIn(80);
    setTimeout(() => {
        pressedButton.removeClass("pressed");
    }, 100);
    pressedButton.addClass("pressed");
}

function playSound(colorName) {
    gameSounds[colorName].play();
}

function displayMessage(message) {
    if (typeof message === "number") {
        $("h1").text(`Level ${message}`);
    } else {
        $("h1").text(message);
    }
}

function nextSequence() {
    function javaScriptRandom() {
        return Math.floor(Math.random() * 4);
    }
    let colors = ["green", "red", "yellow", "blue"];
    let color = colors[javaScriptRandom()];

    animatePress(color);
    playSound(color);

    gamePattern.push(color);
}

function handleUserClick() {
    if (gameActive === false) {
        return;
    }
    let color = $(this).attr("id");
    animatePress(color);
    playSound(color);

    userPattern.push(color);
    checkAnswer();
}

function startGame() {
    if (gameActive === false) {
        gameActive = true;
        nextTurn();
    }
}

function nextTurn() {
    displayMessage(gamePattern.length);
    nextSequence();
}

function checkAnswer() {
    let n = userPattern.length;
    let m = gamePattern.length;
    if (n <= m) {
        if (userPattern[n - 1] != gamePattern[n - 1]) {
            endGame();
            return;
        }
    }

    if (n === m) {
        setTimeout(nextTurn, 1000);
        displayMessage("Good Job!");
        userPattern = [];
    }
}

function handleFailStyles() {
    setTimeout(() => {
        displayMessage("Press a Key to Start");
        $("body").removeClass("game-over");
    }, 1000);
    displayMessage("Game Over");
    $("body").addClass("game-over");
    playSound("wrong");
}

function endGame() {
    gamePattern = [];
    userPattern = [];
    gameActive = false;
    handleFailStyles();
}

function userTurn() {
    userPattern = [];
}

$(".btn").click(handleUserClick);

$(document).keydown(startGame);
