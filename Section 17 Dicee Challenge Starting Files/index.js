function pickRandomDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function createDiceString(n) {
    return `./images/dice${n}.png`;
}

function applySpinEffect() {
    let img1 = document.querySelector(".img1");
    let img2 = document.querySelector(".img2");

    img1.classList.toggle("spinAnimation");
    img2.classList.toggle("spinAnimation");
}

function removeSpinEffect() {
    let img1 = document.querySelector(".img1");
    let img2 = document.querySelector(".img2");

    img1.classList.toggle("spinAnimation");
    img2.classList.toggle("spinAnimation");
}

function diceSpinAnimation() {
    setTimeout(removeSpinEffect, 1000);
    applySpinEffect();
}

function determineWinner(d1, d2) {
    if (d1 === d2) {
        return "Draw";
    }
    return d1 > d2 ? "Player 1 Wins!" : "Player 2 Wins!";
}

function playGame() {
    // Roll dice for a bit

    diceSpinAnimation();

    // Update Browswer to show Results

    let dice1 = pickRandomDice();
    let dice2 = pickRandomDice();

    document
        .querySelector(".img1")
        .setAttribute("src", createDiceString(dice1));
    document
        .querySelector(".img2")
        .setAttribute("src", createDiceString(dice2));

    document.querySelector("h1").innerText = determineWinner(dice1, dice2);
}

diceSpinAnimation();

let playButton = document.querySelector(".roll-dice-button");
playButton.addEventListener("click", playGame);
