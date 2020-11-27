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

function pixel(x, y) {
    this.x = x;
    this.y = y;
}

let snake = [new pixel(50, 0)];

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

function grow(num) {
    let bX = snake[snake.length-1].x;
    let bY = snake[snake.length-1].y;
    
    if(motion.dx != 0) {
        
    }
    else {
        
    }
}

function drawSnake() {
    context.clearRect(0, 0, width, height);
    
    for(p in snake) {
        context.fillRect(snake[p].x, snake[p].y, diff, diff);
    }
}

drawSnake();
grow();
/*
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
    }
}

function event(event) {
    switch(event.key) {
        case "ArrowUp":
            if(pixel.x >= 0 && (pixel.x+diff) <= width && active) {
                motion.dx = 0;
                motion.dy = -diff;
            }
        break;
        case "ArrowDown":
            if(pixel.x >= 0 && (pixel.x+diff) <= width && active) {
                motion.dx = 0;
                motion.dy = diff;
            }
        break;
        case "ArrowLeft":
            if(pixel.y >= 0 && (pixel.y+diff) <= height && active) {
                motion.dx = -diff;
                motion.dy = 0;
            }
        break;
        case "ArrowRight":
            if(pixel.y >= 0 && (pixel.y+diff) <= height && active) {
                motion.dx = diff;
                motion.dy = 0;
            }
        break;
        case " ":
            if(active) active = false;
            else active = true;
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
*/