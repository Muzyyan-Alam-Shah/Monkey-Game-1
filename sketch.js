var player_running,bananaImage,obstacle_img,obstacleGroup,backimage,score,monkey,ground,invisibleGround,banana_group,obstacles_group;
function preload(){
  backimage=loadImage("jungle.jpg");
  
  player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("banana.png");
  obstacle_img=loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
  banana_group=createGroup();
  obstacles_group=createGroup();
  ground=createSprite(400,180,400,20);
  ground.addImage("ground",backimage);
  ground.scale=0.8;
  ground.velocityX=-2;
  

   invisibleGround = createSprite(200,350,400,5);
  invisibleGround.visible =false;
  
  score=0;
  monkey=createSprite(100,350,20,20);
  monkey.addAnimation("running",player_running);
  monkey.scale=0.1;
  
}
function draw() {
  background(220);
 if (ground.x < 0){
    ground.x = ground.width/4;
  }
  Banana(); 
  Obstacles();
  monkey.collide(invisibleGround);

  if(keyDown("space")&&monkey.y >= 318){
    monkey.velocityY=-12;
  }
    monkey.velocityY=monkey.velocityY+0.8;
   if(banana_group.isTouching(monkey)){
     banana_group.destroyEach();
     score+=2;
     
     switch(score){
       case 10:monkey.scale=0.12;
         break;
       case 20:monkey.scale=0.14;
         break;
       case 30:monkey.scale=0.16;
         break;
       case 40:monkey.scale=0.18;
         break;
         default:break;
     }
   }
  
  if(obstacles_group.isTouching(monkey)){
    monkey.scale=0.1;
  }
  
  drawSprites();
   textSize(24);
 text("SCORE:"+score,280,50);

  
}

function Banana(){
if(frameCount%80===0){
  var banana=createSprite(400,250,20,20);
  banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.scale=0.05;
    banana.lifetime=100;
    banana_group.add(banana);
}
}

function Obstacles(){
    if(frameCount % 300 === 0) {
    var obstacles = createSprite(400,335,10,40);
    obstacles.addImage(obstacle_img);
    obstacles.velocityX=-4;
    obstacles.scale = 0.1;
    obstacles.lifetime = 100; 
    obstacles_group.add(obstacles);
}
}







