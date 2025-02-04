let button = document.querySelector(".buttonCost");
let parsedButton = parseFloat(button.innerHTML);

let clickerCost = document.querySelector(".clickerCost");
let parsedClickerCost = parseFloat(clickerCost.innerHTML);

function incrementButton() {
    parsedButton += 1;
    button.innerHTML = parsedButton;
}

function buyClicker() {
    if(parsedButton >= parsedClickerCost) {
        parsedButton -= parsedClickerCost;
        button.innerHTML = parsedButton;
    }
}