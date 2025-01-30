// Create a "Love Application" that takes in two names, and returns a random number between 1 and 100

function loveCalculator(name1, name2) {
    let score = Math.floor(Math.random() * 100 + 1);
    console.log(`${name1} and ${name2} hava compatibility of: ${score}%`);
    if (score > 80) {
        console.log("Wow you guys are in love!");
    } else if (score > 50) {
        console.log("I guess it's good for a fling");
    } else if (score > 20) {
        console.log("You're basically roommates");
    } else {
        console.log("Nah");
    }
}

loveCalculator("Julio", "Karla");
