var fixedR,moveR








function setup() {
  createCanvas(800,400);
 fixedR = createSprite(400, 200, 50, 50);
 moveR = createSprite(200,220,20,20);
moveR.velocityX=3;

}


function draw() {
  background(0);  

  
  console.log(moveR.x-fixedR.x)
  

  bounceOff(moveR,fixedR);
  drawSprites();
}

