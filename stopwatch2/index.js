let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let timer = document.getElementById("timer");
let [secs, mins, hours] = [0, 0, 0];
let time = null;


startBtn.addEventListener("click", start );
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function stopwatch(){
    secs++;
    if(secs == 60){
        secs = 0;
        mins ++
    } 
    if(mins == 60){
        mins = 0;
        hours ++;
    }
    let h = hours < 10 ? "0" + hours : hours ;
    let m = mins < 10 ? "0" + mins : mins;
    let s = secs < 10 ? "0" + secs : secs;

    timer.textContent = `${h} : ${m} : ${s}`;
}
function start(){
    if(time != null ){
        clearInterval(stopwatch);
    }
    time = setInterval(stopwatch, 1000);
}
function stop(){
    clearInterval(time);
}
function reset(){
    clearInterval(time);
     [hours, mins, secs] = [0, 0, 0];
     timer.textContent = "00:00:00";
}

// a bug to fix found when pressing the start button more than once
//the code now runs each 500millisecs and stops the other buttons from 
//working because time != null anymore.