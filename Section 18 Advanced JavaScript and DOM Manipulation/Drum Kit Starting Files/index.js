function makeSound(val) {
    switch (val) {
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            let kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log("Button press not recognized");
    }

    buttonAnimation(val);
}

function buttonAnimation(btn) {
    let activeButton = document.querySelector("." + btn);
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
    activeButton.classList.add("pressed");
}

function handleEventClick() {
    let char = this.innerHTML;

    makeSound(char);
}

document.querySelectorAll(".drum").forEach((entry) => {
    entry.addEventListener("click", handleEventClick);
});

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
});
