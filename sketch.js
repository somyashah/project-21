var bullet, wall;
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(200,200,25,25);
  bullet.shapeColor="white";
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor="orange";
  
  bullet.velocityX=speed;
  wall.velocityX=0;
  wall.velocityY=0;

  
}

function draw() {
  background(0,0,0);  
  if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);}
   if(damage>10){
     wall.shapeColor=color(255,0,0);
   }
   if(damage<10){
  wall.shapeColor=color(0,255,0);}
  
  

 
  drawSprites();
}

