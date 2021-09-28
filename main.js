canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

// Variables for rover image//
rover_image= "rover.png";
rover_height= 100;
rover_width= 90;
rover_x= 400;
rover_y= 300;

// variables for background image//
background_image= "mars.jpg";

// function called when body is loaded//
function add(){
    // codes for updating the background image//
    background_imgTag= new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src= background_image;

    // codes for updating rover image//
    rover_imgTag= new Image();
    rover_imgTag.onload= uploadRover;
    rover_imgTag.src= rover_image;
}

function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
// Ascii //

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed= e.keyCode;
    console.log(keypressed);
    if (keypressed=='37'){
        console.log("left");
        left();
    }
    if (keypressed=='38'){
        console.log("up");
        up();
    }
    if (keypressed=='39'){
        console.log("right");
        right();
    }
    if (keypressed=='40'){
        console.log("down");
        down();
    }
}

function left(){
    if (rover_x>=0){
rover_x= rover_x-10;
uploadBackground();
uploadRover();
console.log("when left arrow is pressed. x=" + rover_x + "y=" + rover_y);
    }
}

function right(){
    if (rover_x<=700){
        rover_x= rover_x+10;
    uploadBackground();
    uploadRover();
    console.log("when right arrow is pressed. x=" + rover_x + "y=" + rover_y);
    }
}

function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        uploadBackground();
        uploadRover();
        console.log("when up key pressed. x=" + rover_x + "y=" + rover_y);
    }
}

function down(){
    if (rover_y<=500){
        rover_y=rover_y+10;
        uploadBackground();
        uploadRover();
        console.log("when up key pressed. x=" + rover_x + "y=" + rover_y);
    }
}