/* Main javascript file */

function append(number) {
    console.log("num");
    if (screen == 0) {
        screen = number;
        document.getElementById("screen").innerHTML = screen;
        return;
    }
    
    solution = (solution * 10) + number;
    document.getElementById("screen").innerHTML = screen;
}

function operation(op) {
    operation = op;
    document.getElementById("screen").innerHTML = 0;
}

function empty() {
    console.log("clear");
    screen = 0;
    document.getElementById("screen").innerHTML = screen;
}

let operation = -1;
let screen = document.querySelector("#screen");
screen = 0;