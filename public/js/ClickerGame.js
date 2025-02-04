let button = document.querySelector(".buttonCost");
let parsedButton = parseFloat(button.innerHTML);

let miniAutoCost = document.querySelector(".miniAutoCost");
let parsedMiniAutoCost = parseFloat(miniAutoCost.innerHTML);
let miniAutoLevel = document.querySelector(".miniAutoLevel");
let miniAutoIncrease = document.querySelector(".miniAutoIncrease");
let parsedMiniAutoIncrease = parseFloat(miniAutoIncrease.innerHTML);

let smallAutoCost = document.querySelector(".smallAutoCost");
let parsedSmallAutoCost = parseFloat(smallAutoCost.innerHTML);
let smallAutoLevel = document.querySelector(".smallAutoLevel");
let smallAutoIncrease = document.querySelector(".smallAutoIncrease");
let parsedSmallAutoIncrease = parseFloat(smallAutoIncrease.innerHTML);

let mediumAutoCost = document.querySelector(".mediumAutoCost");
let parsedMediumAutoCost = parseFloat(mediumAutoCost.innerHTML);
let mediumAutoLevel = document.querySelector(".mediumAutoLevel");
let mediumAutoIncrease = document.querySelector(".mediumAutoIncrease");
let parsedMediumAutoIncrease = parseFloat(mediumAutoIncrease.innerHTML);

creditsPerClick = 1;
let multiplier = 1.15
let creditsPerSecond = 0;

function incrementButton() {
    button.innerHTML = Math.round(parsedButton += creditsPerClick);
}

function buyMiniAuto() {
    if(parsedButton >= parsedMiniAutoCost) {
        button.innerHTML = Math.round(parsedButton -= parsedMiniAutoCost);

        miniAutoLevel.innerHTML++;

        creditsPerSecond += parsedMiniAutoIncrease

        parsedMiniAutoCost *= multiplier;
        miniAutoCost.innerHTML = Math.round(parsedMiniAutoCost)
    }
}

function buySmallAuto() {
    if(parsedButton >= parsedSmallAutoCost) {
        button.innerHTML = Math.round(parsedButton -= parsedSmallAutoCost);

        smallAutoLevel.innerHTML++;

        creditsPerSecond += parsedSmallAutoIncrease

        parsedSmallAutoCost *= multiplier;
        smallAutoCost.innerHTML = Math.round(parsedSmallAutoCost)
    }
}

function buyMediumAuto() {
    if(parsedButton >= parsedMediumAutoCost) {
        button.innerHTML = Math.round(parsedButton -= parsedMediumAutoCost);

        mediumAutoLevel.innerHTML++;
        
        creditsPerSecond += parsedMediumAutoIncrease

        parsedMediumAutoCost *= multiplier;
        mediumAutoCost.innerHTML = Math.round(parsedMediumAutoCost)
    }
}

setInterval(() => {
    parsedButton += creditsPerSecond/10;
    button.innerHTML = Math.round(parsedButton);
},100)