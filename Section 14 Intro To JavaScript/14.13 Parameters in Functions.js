// Create a function that accepts a parameter money, and return how many bottles of milk it can buy
// Milk costs 1.5$

function getMilk(money) {
    console.log("leaveHouse with " + String(money) + "$");
    console.log("go to store");
    let numBottles = Math.floor(money / 1.5);
    console.log("Buy " + String(numBottles) + " bottles of milk.");
    console.log("Go back home");
    console.log("enterHouse");
}

getMilk(200);

/*function getMilk() {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}*/
