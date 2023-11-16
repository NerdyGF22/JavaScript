const button = document.getElementById("myButton");
const box = document.getElementById("myBox");

//eventlistener for button click 
button.addEventListener("click", move);

function move(){
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(begin, 5);

    function begin(){
        if(x >= 200 || y >= 200){
            clearInterval(timerId);
        }
        else{
            x+=1;
            y+=1;
            box.style.left = x + "px";
            box.style.top = y + "px";
        
        }
    }
}