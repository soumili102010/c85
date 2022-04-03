canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

rover_x=10;
rover_y=10;

rover_image="rover.png"

mars_images=["img2.jpg","img3.jpg","img4.jpg","img5.jpg"];

r1=Math.floor(Math.random()*4);
background_image=mars_images[r1];

function add(){
background_img=new Image()
background_img.onload=uploadBackground;
background_img.src=background_image;

rover_img=new Image()
rover_img.onload=uploadrover;
rover_img.src=rover_image;
}

function uploadBackground(){
ctx.drawImage(background_img,0,0,canvas.width,canvas.height);

}

function uploadrover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keypress=e.keyCode;
console.log(keypress);
if(keypress=='38'){
    up();
    console.log("up")
}

if(keypress=='40'){
    down();
    console.log("down")
}

if(keypress=='39'){
    right();
    console.log("right")
} 

if(keypress=='37'){
    left();
    console.log("left")
}
}

function up(){
if (rover_y >=0)
{
    rover_y=rover_y-10;
    console.log("when up arrow key is pressed-"+"y="+rover_y);
    uploadBackground();
    uploadrover();

}
}

function down(){
    if (rover_y <=500)
    {
        rover_y=rover_y+10;
        console.log("when down arrow key is pressed-"+"y="+rover_y);
        uploadBackground();
        uploadrover();
    
    }
    }

    function left(){
        if (rover_x >=0)
        {
            rover_x=rover_x-10;
            console.log("when left arrow key is pressed-"+"x="+rover_x);
            uploadBackground();
            uploadrover();
        
        }
        }

        function right(){
            if (rover_x <=700)
            {
                rover_x=rover_x+10;
                console.log("when right arrow key is pressed-"+"x="+rover_x);
                uploadBackground();
                uploadrover();
            
            }
            }



