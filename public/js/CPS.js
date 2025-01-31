const mainMenu = document.querySelector(".mainMenu");
const clickArea = document.querySelector(".clickArea");
const endScreen = document.querySelector(".end");
const count = document.querySelector(".clickArea .count");
const playAgain = document.querySelector(".end .playAgain");

const stuff = () => {
    waitStart = false;

}

stuff()

const startTest = () => {
    clickArea.style.backgroundColor = "yellow";
}

mainMenu.addEventListener("click", () => {
    mainMenu.classList.remove("active");
    startTest();
  });

clickArea.addEventListener("click", () => {
    if (waitStart) {
        startTest();
        return;
    }
});