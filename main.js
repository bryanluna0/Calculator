/* Main javascript file */

function append(number) {
    console.log("num");
    if (solution == 0) {
        solution = number;
        document.getElementById("solution").innerHTML = solution;
        return;
    }
    
    solution = (solution * 10) + number;
    document.getElementById("solution").innerHTML = solution;    
}

function clear() {
    console.log("clear");
    solution = 0;
    document.getElementById("solution").innerHTML = solution;
}

let solution = document.querySelector("#solution");
solution = 0;
