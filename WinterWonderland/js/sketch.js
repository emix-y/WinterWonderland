var img

const snowFlakeCount = 1000;
const size = 5
const gravity = 1

var snowFlakes = [];

function preload(){
 img = loadImage('img/winter background.jpg')
}

function setup() {
    var canvas = createCanvas(1280, 720);
    canvas.parent("p5container");

    for(let i = 0; i < snowFlakeCount; i++){
    
        snowFlakes.push(
        {
            x: random(width),
            y: random(height)
        });
        console.log(snowFlakes)
    }
}

function draw(){
    noStroke()
    fill(255,255,255)

    image(img, 0, 0, width, height);
    
    for(let i = 0; i < snowFlakes.length; i++){
        var snowflake = snowFlakes[i];
        ellipse(snowflake.x, snowflake.y, size);
        if(snowflake.y > height + size){
            snowflake.y = -size;
            }else {
            snowflake.y += gravity;
            }
    }

    
}