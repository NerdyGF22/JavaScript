<<<<<<< HEAD
const button = document.getElementById("myButton");
const box = document.getElementById("myBox");

//eventlistener for button click 
=======
const ball = document.getElementById("animatedBall");
const button = document.getElementById("startButton");

>>>>>>> 557587b0dfe99e9f140bf34648f4ab63fba98218
button.addEventListener("click", move);

function move(){
    let timerId = null;
    let x = 0;
    let y = 0;

<<<<<<< HEAD
    timerId = setInterval(begin, 5);

    function begin(){
        if(x >= 200 || y >= 200){
            clearInterval(timerId);
=======
    timerId = setInterval(frame, 5);
    //5 is equal to miliseconds
    
    function frame(){
        if(x >= 200 || y >= 200){
            clearInterval(timerId); //clears the timer set above with the setInterval method
>>>>>>> 557587b0dfe99e9f140bf34648f4ab63fba98218
        }
        else{
            x+=1;
            y+=1;
<<<<<<< HEAD
            box.style.left = x + "px";
            box.style.top = y + "px";
        
        }
    }
}
=======
            ball.style.left= x + "px";
            ball.style.top = y + "px";
        }
 }
};
>>>>>>> 557587b0dfe99e9f140bf34648f4ab63fba98218
