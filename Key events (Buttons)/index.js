// eventListener = listen for specific to create interative web pages
//                  events: keydown, keyup
//                  document.addEventListener(event, callback);



const Box = document.getElementById("Box");
const moveAmount = 10;
let x = 0;
let y = 0;



document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp" :
                y -= moveAmount;
                break;
            case "ArrowDown" :
                y += moveAmount;
                break;
            case "ArrowLeft" :
                x -= moveAmount;
                break;
            case "ArrowRight" :
                x += moveAmount;
                break;



        }

        Box.style.top = `${y}px`;
        Box.style.left = `${x}px`;
    }

});





//this code is for key on press and release changing emoji at background picture

document.addEventListener("keydown", event => {
    Box.textContent = "🏃‍♂️";
    Box.style.backgroundColor = "tomato";
});
document.addEventListener("keyup", event => {
    Box.textContent = "😡";
    Box.style.backgroundColor = "lightblue";
});
