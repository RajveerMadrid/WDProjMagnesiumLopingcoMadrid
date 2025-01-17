//Gets elements with specified classes 
const mainMenu = document.querySelector(".mainMenu");
const clickArea = document.querySelector(".clickArea");
const endScreen = document.querySelector(".end");
const alert = document.querySelector(".clickArea .alert");
const RT = document.querySelector(".end .RTtext");
const end = document.querySelector(".end");
const playAgain = document.querySelector(".end .playAgain")

//Variables used
let timer;
let displayGreen;
let timeNow;
let waitStart;
let waitGreen;
let scores;

//Sets everything to false and gets ready for test to start
const stuff = () => {
  displayGreen = false;
  waitStart = false;
  waitGreen = false;
  scores = [];
}

stuff()

//Sets the green click screen
const setGreen = () => {
  clickArea.style.backgroundColor = "lightgreen"
  alert.innerHTML = "Click Now!"
  displayGreen = true;
  timeNow = Date.now()
};

//Starts the test and sets background to red. Loops.
//Gets a random number for the time for green to come out to be random
const startTest = () => {
  clickArea.style.backgroundColor = "red"
  alert.innerHTML = "Wait for green";
  alert.style.color = "black";
  waitGreen = true;
  
  let randomNumber = Math.floor(Math.random() * 3000 + 2000)
  timer = setTimeout(setGreen, randomNumber)
  
  waitStart=false;
}

mainMenu.addEventListener("click", () => {
  mainMenu.classList.remove("active");
  startTest();
});

//Ends the test and shows end screen. Gets the average reaction time from 5 sets.
const endTest = () => {
  end.classList.add("active");
  clearTimeout(timer);
  
  let sum = 0;
  scores.forEach((x) => {
    sum += x
  });
  
  let ave = Math.round(sum/5)
  RT.innerHTML = ave + "ms";
  
}

//Displays reaction time when screen turns green
const displayRT = (rt) => {
  clickArea.style.backgroundColor = "cornsilk"
  alert.innerHTML = `<div class = 'RTtext'>${rt} ms</div>Click to continue`
  displayGreen=false;
  waitStart=true;
  scores.push(rt)
  
  if (scores.length >= 5) {
    endTest();
  }
}

//Displays a too soon message if user clicks before green
const displaySoon = () => {
  clickArea.style.backgroundColor = "cornsilk";
  alert.innerHTML = "Too Soon! Click to continue"
  alert.style.color ="black"
  waitStart = true;
  clearTimeout(timer)
}

//Listens to click then calculates reaction time
clickArea.addEventListener("click", () => {
  if (displayGreen) {
    let clickTime = Date.now()
    let reactionTime = clickTime - timeNow;
    displayRT(reactionTime)
    return;
  }
  
  if (waitStart) {
    startTest();
    return;
  }
  
  if (waitGreen) {
    displaySoon();
    return;
  }
});

playAgain.addEventListener("click", () => {
  end.classList.remove("active");
  stuff();
  startTest()
})
