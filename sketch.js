var groundImg,ground;
function preload(){
  groundImg=loadImage("backGround.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ground = createSprite(width/2,height-420,width,125)
  ground.x = width/2
  ground.velocityX=-3
  ground.scale=0.56
  ground.addImage(groundImg);
  
}

function draw() {
 
  background(255);

   if (ground.x < 50){
        ground.x = 570
      }
  
  
  drawSprites();
}

