var PLAY = 1;
var END = 0;
var GameState = 1;
var ground, stone, stoneimg, BananaGroup, obstacleGroup
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivaltime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  stoneimg = loadImage("obstacle.png")
}



function setup() {
  createCanvas(600, 400)
  
  monkey = createSprite(100, 300, 10, 10)
  monkey.addAnimation("run", monkey_running)
  monkey.scale = 0.15
  
  ground = createSprite(100, 365, 1000, 10)
  
  obstacleGroup = new Group()
  BananaGroup = new Group()
  score = 0
  survivalTime = 0
}


function draw() {
  background("white")
  
  if(GameState === 0){
    stroke("black");
    textSize(20);
    fill("black");
    text("GameOver, Press 'R' to play again", 150, 200)
    ground.velocityX = 0
    obstacleGroup.velocityXEach = 0
    BananaGroup.velocityXEach = 0
    score = 0
    
  }
  if(keyDown("r")){
    GameState = 1
    survivalTime = 0
    score = 0
  }
  if(GameState === 1){
  stroke("black");
  textSize(20);
  fill("black");
  text("score: " + score, 400, 50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.round(frameCount/60) 
  text("Survival Time: "+ survivalTime, 100,50)
  text.visible = true
  
 
  
  if(obstacleGroup.isTouching(monkey)){
    GameState = 0
  }      
  monkey.collide(ground)
  if(keyDown("space")){
    monkey.velocityY = -12
  }
  monkey.velocityY = monkey.velocityY + 0.8
  drawSprites() 
  spawnObstacles()
  spawnbanana()
  
    obstacleGroup.collide(monkey)
     if(BananaGroup.isTouching(monkey)){
    score = score + 2
    BananaGroup.destroyEach()
       
  }
  }
}

function spawnObstacles(){
  if(frameCount%200 === 0 ){
    stone = createSprite(800,320,10,10);
    stone.addImage (stoneimg);
    stone.velocityX = -6; 
    stone.scale = 0.2;
    stone.lifetime = 200 ;
    obstacleGroup.add(stone);
    if(GameState === 1){
    stone.velocityX = -6
  }
  }
}
function spawnbanana(){
  if(frameCount%100===0){
    banana = createSprite (800,230,10,10);
    banana.addImage (bananaImage);
    banana.scale = 0.06;
    banana.velocityX = -4;
    banana.y = random(100,250);
    banana.lifetime = 200;
    BananaGroup.add(banana);
    if(GameState === 1){
    banana.velocityX = -4
    
  }
  }
}



