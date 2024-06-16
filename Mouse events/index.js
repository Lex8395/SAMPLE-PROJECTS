// eventListener = Listen for specific events to create interactive web pages
//                  events: click, mouseover, mouseout
//                  .addEventListener(event, arrow function);



const Box = document.getElementById("Box");
const button = document.getElementById("button");


button.addEventListener("click", event => {
    Box.style.background = "tomato";
    Box.textContent = "OUCH! 🤕";


});

button.addEventListener("mouseover",event =>{
    Box.style.background = "yellow ";
    Box.textContent = "Dont do it! 🙈";

});

button.addEventListener("mouseout", event => {
    Box.style.background = "lightgreen ";
    Box.textContent = "Click Me 😁";

});