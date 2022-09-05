canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

roverWidth=100;
roverHeight=90;
roverX=10;
roverY=10;
Background_image="mars.jpg";
rover_image="rover.png";

function add(){
    Background_image_tag=new Image();
    Background_image_tag.onload=upload_backgound;
    Background_image_tag.src=Background_image;

    Rover_image_tag=new Image();
    Rover_image_tag.onload=upload_Rover;
    Rover_image_tag.src=rover_image;

}

function upload_backgound(){
    ctx.drawImage(Background_image_tag,0,0,canvas.width,canvas.height);
}

function upload_Rover(){
    ctx.drawImage(Rover_image_tag,roverX,roverY,roverWidth,roverHeight);
}

window.addEventListener("keydown",myKeyDown);

function myKeyDown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='38'){
        console.log("up arrow key is pressed");
    up();
    }
    if(keyPressed=='40'){
        console.log("down arrow key is pressed");
    down();
    }
    if(keyPressed=='37'){
        console.log("left arrow key is pressed");
        left();
    }
    if(keyPressed=='39'){
        console.log("right arrow key is pressed");
        right();
    }
}

function up(){
    if(roverY>=0){
        roverY=roverY-10;
        upload_backgound();
        upload_Rover();
    }
}

function down(){
    if(roverY<=500){
        roverY=roverY+10;
        upload_backgound();
        upload_Rover();
    }
}

function left(){
    if(roverX>0){
        roverX=roverX-10;
        upload_backgound();
        upload_Rover();
    }
}

function right(){
    if(roverX<=700){
        roverX=roverX+10;
        upload_backgound();
        upload_Rover();
    }
}