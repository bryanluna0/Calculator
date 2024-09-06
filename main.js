/* Main javascript file */

function append(number) {
    if (solution == 0) {
        console.log("was 0");
        solution = number;
        document.getElementById("solution").innerHTML = solution;
        return;
    }
    
    console.log("changed");
    solution = (solution * 10) + number;
    document.getElementById("solution").innerHTML = solution;    
}

let solution = document.querySelector("#solution");
solution = 0;
