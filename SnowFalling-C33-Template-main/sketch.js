function preload(){
 bgImg = loadImage ("snow1.jpg")
boy1 = loadAnimation("boy1.jpg")
boy2 = loadAnimation("boy2.jpg")
}

function setup() {
  createCanvas(1000,800);
  boy1Image = createSprite(400, 200, 50, 50);
  boy1Image.addAnimation("happy",boy1)
  tree=createSprite (870, 650)
}

function draw() {

  background(bgImg);  
if (boy1Image.x-tree.x<(boy1Image.width-Tree.width)/2){
  boy1Image.velocityX=0
  boy1Image.velocityY=0
  boy1Image.addAnimation ("sad",boy2)
}
  drawSprites();
}
function keyPressed(){
  if (keyCode===LEFT_ARROW){
    boy1Image.velocityX = -5
    boy1Image.velocityY = 5
  }
}