const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");

//define all variables needed for functionality
let startTime =0;
let elapsedTime = 0;
let currentTime =0;
let paused = true;
let intervalId;
let hrs =0;
let mins=0;
let secs=0 ;

//event listeners to all buttons and arrow function with commands for functionality
startBtn.addEventListener("click", () => {
  if(paused){
    paused = false;
    //both of which are zero in the beggining
    startTime = Date.now() - elapsedTime;
    //the function to be executed and the intervals to wait stored in this variable
    intervalId = setInterval(updateTime, 1000);


 
  }
  
});
stopBtn.addEventListener("click", () => {
  if(!paused){
    paused = true
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
});
resetBtn.addEventListener("click", () => {
  paused = true;
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime =0;
  currentTime =0;
  hrs = 0;
  mins = 0;
  secs = 0;
  timeDisplay.textContent = "00:00:00";
});

//a function  to update time that uses date.now, to let the programme know
//its dealing with time.
function updateTime(){
  //both are currently 0
  elapsedTime = Date.now() - startTime;

  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 *60)) % 60);

  //calling the function for each time unit
  secs = pad(secs);
  mins = pad(mins);
  hrs = pad(hrs);

  timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

  //a functio  to precede time with zero of less than 2
  function pad(unit){
    return (("0") + unit).length > 2 ? unit : "0" + unit;
  }

  
}