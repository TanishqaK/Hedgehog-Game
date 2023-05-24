var hedgehogImg, hedgehog;
var platformImg, platform, platformsGroup;
var snakeImg, snake, snakesGroup;
var sky, skyImg
var invisibleBlockGroup, invisibleBlock;
var gameState = "PLAY"
var PLAY = 1;
var END = 0;

function preload(){
  hedgehogImg = loadImage("image-removebg-preview.png");
  snakeImg = loadImage("snakeImg.png");
  platformImg = loadImage("platformImg.png");
  backgroundImg=loadImage("backgroundImg.png");
}

function setup() {
  createCanvas(600, 500);
  bg = createSprite(300,250,200,200);
  bg.addAnimation("bg",backgroundImg)
  bg.scale=1.2

  hedgehog=createSprite(300,300,20,20);
  hedgehog.addAnimation("hedgehog",hedgehogImg);
  hedgehog.scale=0.3

  invisibleGround=createSprite(300,500,500,10)
  invisibleGround.visible=false;
  
  platformsGroup=new Group()
  snakesGroup=new Group()
}

function draw() {
  if(gameState===PLAY){
   
    bg.velocityY=2
    if(bg.y>350){  
      bg.y=150
    }
      if(keyDown("space")){
        hedgehog.velocityY=-10
      }
      if(keyDown("left_arrow")){
        hedgehog.velocityX=-5
      }
      if(keyDown("right_arrow")){
        hedgehog.velocityX=5
      }
      
      hedgehog.velocityY=hedgehog.velocityY+0.8
      hedgehog.collide(invisibleGround)

      platform();
      platformsnakes();

      if (snakesGroup.isTouching(hedgehog) || hedgehog.y > 500) {
        gameState = END;
        hedgehog.destroy();
      }
}
    if(gameState===END){
    
      textSize(25)
      text("Game Over", 230, 250)  
    }
    
    function platform() {
      if (frameCount % 100 === 0) {
        platform = createSprite(Math.round(random(110, 400)), 0)
        platform.addAnimation("platform",platformImg);
        platform.velocityY = 2;
        platformsGroup.add(platform);
        }
 
  function platformsnakes(){
    if (frameCount % 60===0){
      platform = createSprite(Math.round(random(800, 300)), 0)
      platform.addAnimation("platform",platformImg);
      snake=createSprite(Math.round(random(800,300)))
      snake.addAnimation("snake",snakeImg);
      snakesGroup.add(snakes);
    }
  }
  
  drawSprites();
}
}
