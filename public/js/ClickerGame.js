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

let bigAutoCost = document.querySelector(".bigAutoCost");
let parsedBigAutoCost = parseFloat(bigAutoCost.innerHTML);
let bigAutoLevel = document.querySelector(".bigAutoLevel");
let bigAutoIncrease = document.querySelector(".bigAutoIncrease");
let parsedBigAutoIncrease = parseFloat(bigAutoIncrease.innerHTML);

let largeAutoCost = document.querySelector(".largeAutoCost");
let parsedLargeAutoCost = parseFloat(largeAutoCost.innerHTML);
let largeAutoLevel = document.querySelector(".largeAutoLevel");
let largeAutoIncrease = document.querySelector(".largeAutoIncrease");
let parsedLargeAutoIncrease = parseFloat(largeAutoIncrease.innerHTML);

let giantAutoCost = document.querySelector(".giantAutoCost");
let parsedGiantAutoCost = parseFloat(giantAutoCost.innerHTML);
let giantAutoLevel = document.querySelector(".giantAutoLevel");
let giantAutoIncrease = document.querySelector(".giantAutoIncrease");
let parsedGiantAutoIncrease = parseFloat(giantAutoIncrease.innerHTML);

creditsPerClick = 1;
let multiplier = 1.10;
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

function buyBigAuto() {
    if(parsedButton >= parsedBigAutoCost) {
        button.innerHTML = Math.round(parsedButton -= parsedBigAutoCost);

        bigAutoLevel.innerHTML++;

        creditsPerSecond += parsedBigAutoIncrease

        parsedBigAutoCost *= multiplier;
        bigAutoCost.innerHTML = Math.round(parsedBigAutoCost)
    }
}

function buyLargeAuto() {
    if(parsedButton >= parsedLargeAutoCost) {
        button.innerHTML = Math.round(parsedButton -= parsedLargeAutoCost);

        largeAutoLevel.innerHTML++;

        creditsPerSecond += parsedLargeAutoIncrease

        parsedLargeAutoCost *= multiplier;
        largeAutoCost.innerHTML = Math.round(parsedLargeAutoCost)
    }
}

function buyGiantAuto() {
    if(parsedButton >= parsedGiantAutoCost) {
        button.innerHTML = Math.round(parsedButton -= parsedGiantAutoCost);

        giantAutoLevel.innerHTML++;

        creditsPerSecond += parsedGiantAutoIncrease

        parsedGiantAutoCost *= multiplier;
        giantAutoCost.innerHTML = Math.round(parsedGiantAutoCost)
    }
}

setInterval(() => {
    parsedButton += creditsPerSecond/20;
    button.innerHTML = Math.round(parsedButton);
},50)