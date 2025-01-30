function getMilk(money, costPerBottle) {
    console.log("leaveHouse with " + String(money) + "$");
    console.log("go to store");
    let numBottles = Math.floor(money / costPerBottle);
    console.log("Buy " + String(numBottles) + " bottles of milk.");
    console.log("Go back home");
    console.log("enterHouse");
    return money % costPerBottle;
}

let remainingMoney = getMilk(13, 7);
console.log(`Money remaining: ${remainingMoney}$`);
