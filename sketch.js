var ball,img,paddle;

function preload() {
  /* preload your images here of the ball and the paddle */
  ballimage = loadImage("ball.png");
  paddleimage = loadImage("paddle.png");
}

function setup() {
  createCanvas(500, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(200,200,5,5);
  
  paddle = createSprite(450,200,10,10);
  /* assign the images to the sprites */
  ball.addImage(ballimage,"ball.png");
  paddle.addImage(paddleimage,"paddle.png");
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9
  

}

function draw() {
  background("orange");
  
  if(World.frameCount<100){
    textSize(19);
    fill("red");
    textStyle("NORMAL");
    text("USE THE UP AND DOWN ARROW TO HIT THE BALL",20,380);
  }
  
  if(ball.x > 500){
     paddle.visible = false;
    ball.destroy();
     }
  
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  

  /* Allow the ball to bounceoff from the paddle */
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  ball.bounceOff(paddle, randomVelocity);
  
   
  /* Prevent the paddle from going out of the edges */ 
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y + 20;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  var rand = random(6,-6);
  ball.velocityY = rand;
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}
