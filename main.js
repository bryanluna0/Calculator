/* Main javascript file */

function append(number) {
    console.log("num");
    if (screen == 0) {
        screen = number;
        document.getElementById("screen").innerHTML = screen;
        return;
    }
    
    screen = (screen * 10) + number;
    document.getElementById("screen").innerHTML = screen;
}

function operation(op) {
    operator = op;
    document.getElementById("screen").innerHTML = 0;
}

function empty() {
    console.log("clear");
    screen = 0;
    document.getElementById("screen").innerHTML = screen;
}

let operator = -1;
let screen = document.querySelector("#screen");
screen = 0;