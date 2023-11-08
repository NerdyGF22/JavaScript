const movingBox = document.getElementById("myBox");
//event listener for key movement
window.addEventListener("keydown", move); 

//cordinates to be tracked 
let y = 0;
let x = 0;

//function to move keys around with a switch statement 
function move(event){
    switch(event.key){
    case "ArrowUp":
        y-=5
        movingBox.style.top = y + "px";
        break;
    case "ArrowDown":
        y+=5
        movingBox.style.top = y + "px";
        break;
    case "ArrowLeft":
        x-=5
        movingBox.style.left = x + "px";
        break;
    case "ArrowRight":
        x+=5
        movingBox.style.left = x + "px";
        break;
    default:
        break;

    }
        
}
