let canvas = document.getElementById("game_place");
let context = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

context.fillStyle = "rgb(255, 255, 255, 1)";
let active = false;
let speed = 0;

let diff = getDiff(width, height, 30);

let motion = {
    dx: diff,
    dy: 0
}

let pixel = {
    x: 0,
    y: 0
}

function getDiff(width, height, coeff) {
    let diff = 0;
    
    if(width > height) {
        diff = height/coeff;
    }
    else {
        diff = width/coeff;
    }
    
    return diff;
}

function draw() {
    window.requestAnimationFrame(draw);
    
    if(!active) return;
    
    if(speed > 0) {
        speed--;
    }
    else {
        speed = 5;
        
        pixel.x += motion.dx;
        pixel.y += motion.dy;

        if(pixel.x >= width) pixel.x = -diff;
        if(pixel.y >= height) pixel.y = -diff;

        if(pixel.x < (-diff)) pixel.x = width;
        if(pixel.y < (-diff)) pixel.y = height;

        context.clearRect(0, 0, width, height);

        context.fillRect(pixel.x, pixel.y, diff, diff);
        
        console.log(pixel.x);
        console.log(pixel.y);
    }
}

function event(event) {
    switch(event.key) {
        case "ArrowUp":
            if(pixel.x >= 0 && (pixel.x+diff) <= width) {
                motion.dx = 0;
                motion.dy = -diff;
            }
        break;
        case "ArrowDown":
            if(pixel.x >= 0 && (pixel.x+diff) <= width) {
                motion.dx = 0;
                motion.dy = diff;
            }
        break;
        case "ArrowLeft":
            if(pixel.y >= 0 && (pixel.y+diff) <= height) {
                motion.dx = -diff;
                motion.dy = 0;
            }
        break;
        case "ArrowRight":
            if(pixel.y >= 0 && (pixel.y+diff) <= height) {
                motion.dx = diff;
                motion.dy = 0;
            }
        break;
    }
}

canvas.addEventListener("keydown", event, true);
canvas.onfocus = function() {
    active = true;
}
canvas.onblur = function() {
    active = false;
}

canvas.focus();
draw();
