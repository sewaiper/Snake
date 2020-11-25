let canvas = document.getElementById("game_place");
let context = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

context.fillStyle = "rgb(255, 255, 255, 1)";
let coeff = 25;
let x = 0;
let dir = 1;

function draw() {
    window.requestAnimationFrame(draw);
    x += dir;
    
    if((x+width/coeff) >= width) dir = -1;
    if(x == 0) dir = 1;
    
    context.clearRect(0, 0, width, height);
    
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height/coeff);
    context.lineTo(x+width/coeff, (height/coeff)/2);
    context.lineTo(x, 0);
    context.fill();
}
