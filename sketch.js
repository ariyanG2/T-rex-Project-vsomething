function preload(){
  
  trexanimation=loadAnimation("trex1.png", "trex3.png", "trex4.png");
  
  groundimg=loadImage("ground2.png");

  skyimg=loadImage("cloud.png")

  cactusimg1=loadImage("obstacle1.png")
  cactusimg2=loadImage("obstacle2.png")
  cactusimg3=loadImage("obstacle3.png")
  cactusimg4=loadImage("obstacle4.png")
  cactusimg5=loadImage("obstacle5.png")
  cactusimg6=loadImage("obstacle6.png")
}

function setup(){
  createCanvas (600,200);
  
  trex=createSprite(50, 180, 50, 50);
  
  trex.addAnimation("animation", trexanimation);
  
  trex.scale = 0.5;

  ground=createSprite(300, 190, 600, 20);
  
  ground.addImage(groundimg);

  ground.velocityX = -4;

  ground2=createSprite(300, 200, 600, 20);

  ground2.visible = false

}

function draw(){
  
  background(180);
  
  trex.collide(ground2);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  if (keyDown("SPACE")&&(trex.y >= 166 ) ){
    trex.velocityY = -6;
  }

  trex.velocityY = trex.velocityY + 0.2;

  sky()

  cactus()

  drawSprites();
}

function sky(){
  
if (frameCount%70===0){
  cloud=createSprite(600, random(10, 90), 25, 25)  
  cloud.velocityX = -4
  cloud.addImage(skyimg)
  cloud.scale = 0.75
  cloud.lifetime = 155
  //console.log(trex.depth)
  //console.log(cloud.depth)
  
  trex.depth = cloud.depth + 1
}

}

function cactus(){
  if (frameCount%70===0){
  cacti = createSprite(600,170, 25, 25)
  cacti.velocityX = -4
  cacti.scale = 0.5  
  cacti.lifetime = 155
  var number = Math.round(random(1,6))
  switch(number){
  case 1:cacti.addImage(cactusimg1)  
  break
  case 2:cacti.addImage(cactusimg2)  
  break
  case 3:cacti.addImage(cactusimg3)  
  break
  case 4:cacti.addImage(cactusimg4)  
  break
  case 5:cacti.addImage(cactusimg5)  
  break
  case 6:cacti.addImage(cactusimg6)  
  break
  }
  //no quotations in a variable; (num)
}
}

