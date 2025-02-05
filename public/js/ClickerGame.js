let button = document.querySelector(".buttonCost");
let parsedButton = parseFloat(button.innerHTML);

//Declare variables for miniAuto
let miniAutoCost = document.querySelector(".miniAutoCost");
let parsedMiniAutoCost = parseFloat(miniAutoCost.innerHTML);
let miniAutoLevel = document.querySelector(".miniAutoLevel");
let miniAutoIncrease = document.querySelector(".miniAutoIncrease");
let parsedMiniAutoIncrease = parseFloat(miniAutoIncrease.innerHTML);

//Declare variables for smallAuto
let smallAutoCost = document.querySelector(".smallAutoCost");
let parsedSmallAutoCost = parseFloat(smallAutoCost.innerHTML);
let smallAutoLevel = document.querySelector(".smallAutoLevel");
let smallAutoIncrease = document.querySelector(".smallAutoIncrease");
let parsedSmallAutoIncrease = parseFloat(smallAutoIncrease.innerHTML);

//Declare variables for mediumAuto
let mediumAutoCost = document.querySelector(".mediumAutoCost");
let parsedMediumAutoCost = parseFloat(mediumAutoCost.innerHTML);
let mediumAutoLevel = document.querySelector(".mediumAutoLevel");
let mediumAutoIncrease = document.querySelector(".mediumAutoIncrease");
let parsedMediumAutoIncrease = parseFloat(mediumAutoIncrease.innerHTML);

//Declare variables for bigAuto
let bigAutoCost = document.querySelector(".bigAutoCost");
let parsedBigAutoCost = parseFloat(bigAutoCost.innerHTML);
let bigAutoLevel = document.querySelector(".bigAutoLevel");
let bigAutoIncrease = document.querySelector(".bigAutoIncrease");
let parsedBigAutoIncrease = parseFloat(bigAutoIncrease.innerHTML);

//Declare variables for largeAuto
let largeAutoCost = document.querySelector(".largeAutoCost");
let parsedLargeAutoCost = parseFloat(largeAutoCost.innerHTML);
let largeAutoLevel = document.querySelector(".largeAutoLevel");
let largeAutoIncrease = document.querySelector(".largeAutoIncrease");
let parsedLargeAutoIncrease = parseFloat(largeAutoIncrease.innerHTML);

//Declare variables for giantAuto
let giantAutoCost = document.querySelector(".giantAutoCost");
let parsedGiantAutoCost = parseFloat(giantAutoCost.innerHTML);
let giantAutoLevel = document.querySelector(".giantAutoLevel");
let giantAutoIncrease = document.querySelector(".giantAutoIncrease");
let parsedGiantAutoIncrease = parseFloat(giantAutoIncrease.innerHTML);

//Sets credits per click to 1, cost multiplier to x0.10, and credits per second to 0
creditsPerClick = 1;
let multiplier = 1.10;
let creditsPerSecond = 0;

//Increases credits by creditsPerClick each time button is clicked
function incrementButton() {
    button.innerHTML = Math.round(parsedButton += creditsPerClick);
}

//Buys miniAuto when miniAuto is clicked and adjusts its cost and creditsPerSecond
function buyMiniAuto() {
    if(parsedButton >= parsedMiniAutoCost) {
        button.innerHTML = Math.round(parsedButton -= parsedMiniAutoCost);

        miniAutoLevel.innerHTML++;

        creditsPerSecond += parsedMiniAutoIncrease

        parsedMiniAutoCost *= multiplier;
        miniAutoCost.innerHTML = Math.round(parsedMiniAutoCost)
    }
}

//Buys smallAuto when smallAuto is clicked and adjusts its cost and creditsPerSecond
function buySmallAuto() {
    if(parsedButton >= parsedSmallAutoCost) {
        button.innerHTML = Math.round(parsedButton -= parsedSmallAutoCost);

        smallAutoLevel.innerHTML++;

        creditsPerSecond += parsedSmallAutoIncrease

        parsedSmallAutoCost *= multiplier;
        smallAutoCost.innerHTML = Math.round(parsedSmallAutoCost)
    }
}

//Buys mediumAuto when mediumAuto is clicked and adjusts its cost and creditsPerSecond
function buyMediumAuto() {
    if(parsedButton >= parsedMediumAutoCost) {
        button.innerHTML = Math.round(parsedButton -= parsedMediumAutoCost);

        mediumAutoLevel.innerHTML++;
        
        creditsPerSecond += parsedMediumAutoIncrease

        parsedMediumAutoCost *= multiplier;
        mediumAutoCost.innerHTML = Math.round(parsedMediumAutoCost)
    }
}

//Buys bigAuto when bigAuto is clicked and adjusts its cost and creditsPerSecond
function buyBigAuto() {
    if(parsedButton >= parsedBigAutoCost) {
        button.innerHTML = Math.round(parsedButton -= parsedBigAutoCost);

        bigAutoLevel.innerHTML++;

        creditsPerSecond += parsedBigAutoIncrease

        parsedBigAutoCost *= multiplier;
        bigAutoCost.innerHTML = Math.round(parsedBigAutoCost)
    }
}

//Buys largeAuto when largeAuto is clicked and adjusts its cost and creditsPerSecond
function buyLargeAuto() {
    if(parsedButton >= parsedLargeAutoCost) {
        button.innerHTML = Math.round(parsedButton -= parsedLargeAutoCost);

        largeAutoLevel.innerHTML++;

        creditsPerSecond += parsedLargeAutoIncrease

        parsedLargeAutoCost *= multiplier;
        largeAutoCost.innerHTML = Math.round(parsedLargeAutoCost)
    }
}

//Buys giantAuto when giantAuto is clicked and adjusts its cost and creditsPerSecond
function buyGiantAuto() {
    if(parsedButton >= parsedGiantAutoCost) {
        button.innerHTML = Math.round(parsedButton -= parsedGiantAutoCost);

        giantAutoLevel.innerHTML++;

        creditsPerSecond += parsedGiantAutoIncrease

        parsedGiantAutoCost *= multiplier;
        giantAutoCost.innerHTML = Math.round(parsedGiantAutoCost)
    }
}

//adds creditsPerSecond/100 amount of credits each millisecond to have a smoother change/update animation
setInterval(() => {
    parsedButton += creditsPerSecond/100;
    button.innerHTML = Math.round(parsedButton);
},1)