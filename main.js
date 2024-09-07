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
    operandA = screen;
    screen = 0;
    document.getElementById("screen").innerHTML = 0;
}

function empty() {
    console.log("clear");
    screen = 0;
    document.getElementById("screen").innerHTML = screen;
}

function result() {
    console.log("result");
    if (operator == -1) {
        return;
    }

    operandB = screen;
    if (operator == 0) {
        screen = operandA * operandB;
    }
    else if (operator == 1) {
        screen = operandA + operandB;
    }
    else if (operator == 2) {
        screen = operandA - operandB;
    }
    else if (operator == 3) {
        screen = Math.round( (operandA / operandB) * 100) / 100;
    }

    document.getElementById("screen").innerHTML = screen; 
}

let operator = -1;
let screen = document.querySelector("#screen");
screen = 0;

let operandA = 0;
let operandB = 0;