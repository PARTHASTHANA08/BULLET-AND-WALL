var bullet,bullet2,bullet3,wall,wall2,wall3;
var speed,weight,thickness;
function setup() {
  createCanvas(1000,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
   bullet = createSprite(50, 100, 20, 5);
   bullet.velocityX = speed;
   bullet.shapeColor ="white";
   bullet2 = createSprite(50,200,20,5);
   bullet2.velocityX = speed;
   bullet2.shapeColor ="white";
   bullet3 = createSprite(50,300,20,5);
   bullet3.velocityX = speed;
   bullet3.shapeColor = "white";
   wall = createSprite(950,100,thickness,height/10);
   wall.shapeColor = "white";
   wall2 =createSprite(950,200,thickness,height/10);
   wall2.shapeColor = "white";
   wall3 = createSprite(950,300,thickness,height/10);
   wall3.shapeColor = "white";
}

function draw() {
  background(0); 
  if(hasCollided(bullet,wall)){
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if( damage > 10){
      wall.shapeColor = "red";
    }
    if(damage < 10){
      wall.shapeColor = "green";
    }
  } 
  bullet.collide(wall);
  bullet2.collide(wall2);
  bullet3.collide(wall3);
  drawSprites();
}
function hasCollided(){
  bulletRightEdge = bullet.x + bullet.widht;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  } 
    return false;
}