var path;
var Runner, Runner_Image;
var bomb;
var coin;
var energyDrink;
var power;
function preload(){
  //pre-load images
  pathImg=loadImage("path.png")
  Runner_Image=loadAnimation("Runner-1.png","Runner-2.png")
  bombImg=loadImage("bomb.png")
  coinImg=loadImage("coin.png")
  energyDrinkImg=load("energyDrink.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY=4
  path.scale=1.2
  Runner = createSprite(180,340,30,30)
  Runner.addAnimation("Running",Runner_Image)
  Runner.scale=0.08
  leftb = createSprite(0,0,100,800)
  leftb.visble=false
  rightb = createSprite(410,0,100,800)
  rightb.visble=false
  bomb = createSprite(150,200,30,30)
  bomb.addImage(bombImg)
  bomb.velocityY=4
  bomb.scale=0.1
}

function draw() {
  background(0);
  path.velocityY=4
  Runner.x=World.mouseX
  edges=createEdgeSprites()
  Runner.collide(edges[3])
  Runner.collide(leftb)
  Runner.collide(rightb)
  if (path.y>400)
  {
    path.y=height/3
  
  }
  spawncoins()
 drawSprites()
}
function spawncoins(){
  if (frameCount %40===0)
  {


    coin = createSprite(150,250,30,30)
    coin.addImage(coinImg)
    coin.velocityY = 5
    coin.y=Math.round(random(10,60))
    coin.depth=Runner.depth
    Runner.depth=Runner.depth+1
    coin.Lifetime=10
  }
}
