var fizz = new Array();
var count = 1;

function fizzbuzz(num) {
    var fizz = new Array();
    for (let i = 1; i <= num; i++) {
        var newAddition = "";
        if (count % 3 === 0) {
            newAddition = newAddition + "Fizz";
        }
        if (count % 5 === 0) {
            newAddition = newAddition + "Buzz";
        }
        if (newAddition === "") {
            newAddition = i;
        }
        fizz.push(newAddition);
        count++;
    }

    console.log(fizz);
}

fizzbuzz(44);
