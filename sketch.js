var mrect;
var frect;

function setup(){
  createCanvas(800,400);
  mrect=createSprite(200, 200, 50, 60);
  frect=createSprite(300,300,60,50);

}

function draw(){
  background(255,255,255);  

  mrect.x=World.mouseX;
  mrect.y=World.mouseY;
  if(mrect.x-frect.x<mrect.width/2+frect.width/2 &&
     frect.x-mrect.x<frect.width/2+mrect.width/2 &&
      mrect.y-frect.y<mrect.height/2+frect.height/2 && 
    frect.y-mrect.y<frect.height/2+mrect.height/2){
    mrect.shapeColor="green";
    frect.shapeColor="green";

  }
  else{
    mrect.shapeColor="red";
    frect.shapeColor="red";
  }

  
  drawSprites();
}