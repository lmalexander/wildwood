console.log("roll.js is connected")

let allRolls =[];

let btnRoll = document.getElementById("btn-roll");

let displayRoll = document.getElementById("display-roll");



function btnRollPress() {
    let newRoll = Math.floor(Math.random() * 6 ) + 1
console.log(newRoll);
    displayRoll.innerText = newRoll;
    allRolls.push(newRoll);
    console.log(allRolls)
}

