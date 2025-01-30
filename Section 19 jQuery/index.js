$("h1").addClass("big-title");

$("button").text("Don't Click Me");

function createRandomColor() {
    function javaScriptRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    return `rgb(${javaScriptRandom(0, 255)},
            ${javaScriptRandom(0, 255)}, 
            ${javaScriptRandom(0, 255)})`;
}
/*
for(let i=0; i<document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", () => {
        document.querySelector("h1").style.color = createRandomColor();})
}
Could instead be written as */
$("button").click(() => {
    /**
    $("button").remove();
    $("h1").after("<h2>Well they're gone don't you feel bad now?</h2>");
     */
    $("h1").animate({ "color": "red" });
});

/* What if you wanted to do a keystroke?
document.querySelector("body").addEventListener("keydown", (e) => {
    document.querySelector("h1").innerText = e.key;
});

 */
$(document).keydown((e) => {
    $("h1").text(e.key);
});

$("h1").on("mouseover", () => {
    $("h1").css("color", createRandomColor());
});
