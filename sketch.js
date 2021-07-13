var runner,runner_running,edges;
var path,pathImage;
var wall
var wall2




function preload(){
  runner_running = loadAnimation("Runner-1.png","Runner-2.png")
  pathImage = loadImage ("path.png");
  
}

function setup(){
  createCanvas(400,400);
   
  path = createSprite(200,200);
  path.addImage("path",pathImage);
  path.scale = 1.2;
  
  runner = createSprite (200,350);
  runner.addAnimation("running",runner_running);
  runner.scale = 0.07;

  
 
  wall = createSprite(0,0,100,800);
  wall.visible = false;

  wall2 = createSprite (410,0,50,800);
  wall2.visible = false;

  

  
}

function draw() {
  background("green");
  runner.x = World.mouseX;


  
  if (runner.x<85){
    runner.x=85;

  }
  
 
  path.velocityY= 3;
  edges= createEdgeSprites();
  
  runner.collide(wall2);
 
 
  if (path.y>600){
    path.y = path.height/200;
}
  

  drawSprites();
  
}
