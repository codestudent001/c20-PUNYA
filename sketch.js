var fixedbox,movingbox;


function setup() {
  createCanvas(800,400);
  fixedbox=createSprite(400, 200, 50, 50);
  movingbox=createSprite(400, 200, 50, 50);
fixedbox.shapeColor="blue";
movingbox.shapeColor="blue";
}

function draw() {
  background(0);  
  movingbox.x=mouseX;
  movingbox.y=mouseY;
if(movingbox.x-fixedbox.x<=movingbox.width/2+fixedbox.width/2 &&
fixedbox.x-movingbox.x<=movingbox.width/2+fixedbox.width/2 &&
movingbox.y-fixedbox.y<=movingbox.height/2+fixedbox.height/2 &&
fixedbox.y-movingbox.y<=movingbox.height/2+fixedbox.height/2){
  fixedbox.shapeColor="green";
movingbox.shapeColor="green";

}
else{
  fixedbox.shapeColor="blue";
movingbox.shapeColor="blue";
}
  drawSprites();
}