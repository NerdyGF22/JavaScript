const ball = document.getElementById("animatedBall");
const button = document.getElementById("startButton");

button.addEventListener("click", move);

function move(){
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);
    //5 is equal to miliseconds
    
    function frame(){
        if(x >= 200 || y >= 200){
            clearInterval(timerId); //clears the timer set above with the setInterval method
        }
        else{
            x+=1;
            y+=1;
            ball.style.left= x + "px";
            ball.style.top = y + "px";
        }
 }
};