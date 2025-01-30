function nightyNineBottles() {
    let bottles = 99;

    while (bottles > 2) {
        console.log(bottles + " bottles of beer on the wall");
        console.log(bottles + " bottles of beer,");
        console.log("Take one down, pass it around,");
        bottles--;
        console.log(bottles + " bottles of beer on the wall.");
    }
    console.log(bottles + " bottles of beer on the wall");
    console.log(bottles + " bottles of beer,");
    console.log("Take one down, pass it around,");
    bottles--;
    console.log(bottles + " bottle of beer on the wall.");

    console.log(bottles + " bottle of beer on the wall");
    console.log(bottles + " bottle of beer,");
    console.log("Take one down, pass it around,");
    bottles--;
    console.log("No bottles of beer on the wall.");
}

nightyNineBottles();
