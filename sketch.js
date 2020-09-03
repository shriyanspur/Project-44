var paddle;
var ball, ballImg;
var w1, w2, w3;
var backImg;
var score = 0;
var level = 1;
var counter = 0;
var lives = 2;
var gameOver, gameOverImg;


function preload() {
  backImg = loadImage("background.jpg");

  ballImg = loadImage('ball.png');

  PImg = loadImage("pink.png");
  YImg = loadImage("yellow.png")
  LGImg = loadImage("lgreen.png")
  LBImg = loadImage("LBlue.png")
  DGImg = loadImage("dgreen.png")
  DBImg = loadImage("Darkblue.png")
  OImg = loadImage("orange.png")
  RImg = loadImage("red.png")
  BRImg = loadImage("brown.png")
  BLImg = loadImage("black.png")
 
  bImg = loadImage("3.png");

  darkImg = loadImage("1.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  w1 = createSprite(-15, displayHeight/2, 30, displayHeight);

  w2 = createSprite(displayWidth/2, -15, displayWidth, 30);

  w3 = createSprite(displayWidth+15, displayHeight/2, 30, displayHeight);

  w4 = createSprite(displayWidth+14, displayHeight-150, 30, displayHeight/3+50);
  w4.visible = false;


  paddle = createSprite(displayWidth/2, displayHeight-5, 100, 20);
  paddle.shapeColor = '#F39C12';
  

  //Create the Blocks
  ba1 = createSprite(120, 80, 100, 50);
  ba1.addImage(PImg);
  ba2 = createSprite(177, 80, 100, 50);
  ba2.addImage(YImg);
  ba3 = createSprite(234, 80, 100, 50);
  ba3.addImage(PImg);
  ba4 = createSprite(291, 80, 100, 50);
  ba4.addImage(RImg);
  ba5 = createSprite(348, 80, 100, 50);
  ba5.addImage('darkImg', darkImg);
  ba5.addImage('bImg', bImg);
  ba5g = 0;
  ba6 = createSprite(405, 80, 100, 50);
  ba6.addImage('darkImg', darkImg);
  ba6.addImage('bImg', bImg);
  ba6g = 0;
  ba7 = createSprite(462, 80, 100, 50);
  ba7.addImage(OImg);
  ba8 = createSprite(519, 80, 100, 50);
  ba8.addImage(LGImg);
  ba9 = createSprite(576, 80, 100, 50);
  ba9.addImage(RImg);
  ba10 = createSprite(633, 80, 100, 50);
  ba10.addImage('darkImg', darkImg);
  ba10.addImage('bImg', bImg);
  ba10g = 0;
  ba11 = createSprite(690, 80, 100, 50);
  ba11.addImage('darkImg', darkImg);
  ba11.addImage('bImg', bImg);
  ba11g = 0;
  ba12 = createSprite(747, 80, 100, 50);
  ba12.addImage(LGImg);
  ba13 = createSprite(804, 80, 100, 50);
  ba13.addImage(OImg);
  ba14 = createSprite(861, 80, 100, 50);
  ba14.addImage(PImg);
  ba15 = createSprite(918, 80, 100, 50);
  ba15.addImage(BRImg);


  bb1 = createSprite(120, 137, 100, 50);
  bb1.addImage(LGImg);
  bb2 = createSprite(177, 137, 100, 50);
  bb2.addImage(DGImg);
  bb3 = createSprite(234, 137, 100, 50);
  bb3.addImage(OImg);
  bb4 = createSprite(291, 137, 100, 50);
  bb4.addImage(LGImg);
  bb5 = createSprite(348, 137, 100, 50);
  bb5.addImage('darkImg', darkImg);
  bb5.addImage('bImg', bImg);
  bb5g = 0;
  bb6 = createSprite(405, 137, 100, 50);
  bb6.addImage('darkImg', darkImg);
  bb6.addImage('bImg', bImg);
  bb6g = 0;
  bb7 = createSprite(462, 137, 100, 50);
  bb7.addImage(PImg);
  bb8 = createSprite(519, 137, 100, 50);
  bb8.addImage(BRImg);
  bb9 = createSprite(576, 137, 100, 50);
  bb9.addImage(LBImg);
  bb10 = createSprite(633, 137, 100, 50);
  bb10.addImage('darkImg', darkImg);
  bb10.addImage('bImg', bImg);
  bb10g = 0;
  bb11 = createSprite(690, 137, 100, 50);
  bb11.addImage('darkImg', darkImg);
  bb11.addImage('bImg', bImg);
  bb11g = 0;
  bb12 = createSprite(747, 137, 100, 50);
  bb12.addImage(DBImg);
  bb13 = createSprite(804, 137, 100, 50);
  bb13.addImage(YImg);
  bb14 = createSprite(861, 137, 100, 50);
  bb14.addImage(RImg);
  bb15 = createSprite(918, 137, 100, 50);
  bb15.addImage(YImg);


  bc1 = createSprite(120, 194, 100, 50);
  bc1.addImage(YImg);
  bc2 = createSprite(177, 194, 100, 50);
  bc2.addImage(BRImg);
  bc3 = createSprite(234, 194, 100, 50);
  bc3.addImage(DBImg);
  bc4 = createSprite(291, 194, 100, 50);
  bc4.addImage(YImg);
  bc5 = createSprite(348, 194, 100, 50);
  bc5.addImage('darkImg', darkImg);
  bc5.addImage('bImg', bImg);
  bc5g = 0;
  bc6 = createSprite(405, 194, 100, 50);
  bc6.addImage('darkImg', darkImg);
  bc6.addImage('bImg', bImg);
  bc6g = 0;
  bc7 = createSprite(462, 194, 100, 50);
  bc7.addImage(DBImg);
  bc8 = createSprite(519, 194, 100, 50);
  bc8.addImage(YImg);
  bc9 = createSprite(576, 194, 100, 50);
  bc9.addImage(OImg);
  bc10 = createSprite(633, 194, 100, 50);
  bc10.addImage('darkImg', darkImg);
  bc10.addImage('bImg', bImg);
  bc10g = 0;
  bc11 = createSprite(690, 194, 100, 50);
  bc11.addImage('darkImg', darkImg);
  bc11.addImage('bImg', bImg);
  bc11g = 0;
  bc12 = createSprite(747, 194, 100, 50);
  bc12.addImage(BRImg);
  bc13 = createSprite(804, 194, 100, 50);
  bc13.addImage(DGImg);
  bc14 = createSprite(861, 194, 100, 50);
  bc14.addImage(LBImg);
  bc15 = createSprite(918, 194, 100, 50);
  bc15.addImage(BLImg);


  bd1 = createSprite(120, 251, 100, 50);
  bd1.addImage(OImg);
  bd2 = createSprite(177, 251, 100, 50);
  bd2.addImage(RImg);
  bd3 = createSprite(234, 251, 100, 50);
  bd3.addImage(PImg);
  bd4 = createSprite(291, 251, 100, 50);
  bd4.addImage(LBImg);
  bd5 = createSprite(348, 251, 100, 50);
  bd5.addImage('darkImg', darkImg);
  bd5.addImage('bImg', bImg);
  bd5g = 0;
  bd6 = createSprite(405, 251, 100, 50);
  bd6.addImage('darkImg', darkImg);
  bd6.addImage('bImg', bImg);
  bd6g = 0;
  bd7 = createSprite(462, 251, 100, 50);
  bd7.addImage(BLImg);
  bd8 = createSprite(519, 251, 100, 50);
  bd8.addImage(DGImg);
  bd9 = createSprite(576, 251, 100, 50);
  bd9.addImage(PImg);
  bd10 = createSprite(633, 251, 100, 50);
  bd10.addImage('darkImg', darkImg);
  bd10.addImage('bImg', bImg);
  bd10g = 0;
  bd11 = createSprite(690, 251, 100, 50);
  bd11.addImage('darkImg', darkImg);
  bd11.addImage('bImg', bImg);
  bd11g = 0;
  bd12 = createSprite(747, 251, 100, 50);
  bd12.addImage(RImg);
  bd13 = createSprite(804, 251, 100, 50);
  bd13.addImage(YImg);
  bd14 = createSprite(861, 251, 100, 50);
  bd14.addImage(LGImg);
  bd15 = createSprite(918, 251, 100, 50);
  bd15.addImage(PImg);


  be1 = createSprite(120, 308, 100, 50);
  be1.addImage('darkImg', darkImg);
  be1.addImage('bImg', bImg);
  be1g = 0;
  be2 = createSprite(177, 308, 100, 50);
  be2.addImage('darkImg', darkImg);
  be2.addImage('bImg', bImg);
  be2g = 0;
  be3 = createSprite(234, 308, 100, 50);
  be3.addImage('darkImg', darkImg);
  be3.addImage('bImg', bImg);
  be3g = 0;
  be4 = createSprite(291, 308, 100, 50);
  be4.addImage('darkImg', darkImg);
  be4.addImage('bImg', bImg);
  be4g = 0;
  be5 = createSprite(348, 308, 100, 50);
  be5.addImage('darkImg', darkImg);
  be5.addImage('bImg', bImg);
  be5g = 0;
  be6 = createSprite(405, 308, 100, 50);
  be6.addImage('darkImg', darkImg);
  be6.addImage('bImg', bImg);
  be6g = 0;
  be7 = createSprite(462, 308, 100, 50);
  be7.addImage('darkImg', darkImg);
  be7.addImage('bImg', bImg);
  be7g = 0;
  be8 = createSprite(519, 308, 100, 50);
  be8.addImage('darkImg', darkImg);
  be8.addImage('bImg', bImg);
  be8g = 0;
  be9 = createSprite(576, 308, 100, 50);
  be9.addImage('darkImg', darkImg);
  be9.addImage('bImg', bImg);
  be9g = 0;
  be10 = createSprite(633, 308, 100, 50);
  be10.addImage('darkImg', darkImg);
  be10.addImage('bImg', bImg);
  b10g = 0;
  be11 = createSprite(690, 308, 100, 50);
  be11.addImage('darkImg', darkImg);
  be11.addImage('bImg', bImg);
  be11g = 0;
  be12 = createSprite(747, 308, 100, 50);
  be12.addImage('darkImg', darkImg);
  be12.addImage('bImg', bImg);
  be12g = 0;
  be13 = createSprite(804, 308, 100, 50);
  be13.addImage('darkImg', darkImg);
  be13.addImage('bImg', bImg);
  be13g = 0;
  be14 = createSprite(861, 308, 100, 50);
  be14.addImage('darkImg', darkImg);
  be14.addImage('bImg', bImg);
  be14g = 0;
  be15 = createSprite(918, 308, 100, 50);
  be15.addImage('darkImg', darkImg);
  be15.addImage('bImg', bImg);
  be15g = 0;


  bf1 = createSprite(120, 365, 100, 50);
  bf1.addImage('darkImg', darkImg);
  bf1.addImage('bImg', bImg);
  bf1g = 0;
  bf2 = createSprite(177, 365, 100, 50);
  bf2.addImage('darkImg', darkImg);
  bf2.addImage('bImg', bImg);
  bf2g = 0;
  bf3 = createSprite(234, 365, 100, 50);
  bf3.addImage('darkImg', darkImg);
  bf3.addImage('bImg', bImg);
  bf3g = 0;
  bf4 = createSprite(291, 365, 100, 50);
  bf4.addImage('darkImg', darkImg);
  bf4.addImage('bImg', bImg);
  bf4g = 0;
  bf5 = createSprite(348, 365, 100, 50);
  bf5.addImage('darkImg', darkImg);
  bf5.addImage('bImg', bImg);
  bf5g = 0;
  bf6 = createSprite(405, 365, 100, 50);
  bf6.addImage('darkImg', darkImg);
  bf6.addImage('bImg', bImg);
  bf6g = 0;
  bf7 = createSprite(462, 365, 100, 50);
  bf7.addImage('darkImg', darkImg);
  bf7.addImage('bImg', bImg);
  bf7g = 0;
  bf8 = createSprite(519, 365, 100, 50);
  bf8.addImage('darkImg', darkImg);
  bf8.addImage('bImg', bImg);
  bf8g = 0;
  bf9 = createSprite(576, 365, 100, 50);
  bf9.addImage('darkImg', darkImg);
  bf9.addImage('bImg', bImg);
  bf9g = 0;
  bf10 = createSprite(633, 365, 100, 50);
  bf10.addImage('darkImg', darkImg);
  bf10.addImage('bImg', bImg);
  bf10g = 0;
  bf11 = createSprite(690, 365, 100, 50);
  bf11.addImage('darkImg', darkImg);
  bf11.addImage('bImg', bImg);
  bf11g = 0;
  bf12 = createSprite(747, 365, 100, 50);
  bf12.addImage('darkImg', darkImg);
  bf12.addImage('bImg', bImg);
  bf12g = 0;
  bf13 = createSprite(804, 365, 100, 50);
  bf13.addImage('darkImg', darkImg);
  bf13.addImage('bImg', bImg);
  bf13g = 0;
  bf14 = createSprite(861, 365, 100, 50);
  bf14.addImage('darkImg', darkImg);
  bf14.addImage('bImg', bImg);
  bf14g = 0;
  bf15 = createSprite(918, 365, 100, 50);
  bf15.addImage('darkImg', darkImg);
  bf15.addImage('bImg', bImg);
  bf15g = 0;


  bg1 = createSprite(120, 422, 100, 50);
  bg1.addImage(OImg);
  bg2 = createSprite(177, 422, 100, 50);
  bg2.addImage(LBImg);
  bg3 = createSprite(234, 422, 100, 50);
  bg3.addImage(DGImg);
  bg4 = createSprite(291, 422, 100, 50);
  bg4.addImage(PImg);
  bg5 = createSprite(348, 422, 100, 50);
  bg5.addImage('darkImg', darkImg);
  bg5.addImage('bImg', bImg);
  bg5g = 0;
  bg6 = createSprite(405, 422, 100, 50);
  bg6.addImage('darkImg', darkImg);
  bg6.addImage('bImg', bImg);
  bg6g = 0;
  bg7 = createSprite(462, 422, 100, 50);
  bg7.addImage(OImg);
  bg8 = createSprite(519, 422, 100, 50);
  bg8.addImage(YImg);
  bg9 = createSprite(576, 422, 100, 50);
  bg9.addImage(PImg);
  bg10 = createSprite(633, 422, 100, 50);
  bg10.addImage('darkImg', darkImg);
  bg10.addImage('bImg', bImg);
  bg10g = 0;
  bg11 = createSprite(690, 422, 100, 50);
  bg11.addImage('darkImg', darkImg);
  bg11.addImage('bImg', bImg);
  bg11g = 0;
  bg12 = createSprite(747, 422, 100, 50);
  bg12.addImage(YImg);
  bg13 = createSprite(804, 422, 100, 50);
  bg13.addImage(RImg);
  bg14 = createSprite(861, 422, 100, 50);
  bg14.addImage(LBImg);
  bg15 = createSprite(918, 422, 100, 50);
  bg15.addImage(BRImg);


  bh1 = createSprite(120, 479, 100, 50);
  bh1.addImage(YImg);
  bh2 = createSprite(177, 479, 100, 50);
  bh2.addImage(BRImg);
  bh3 = createSprite(234, 479, 100, 50);
  bh3.addImage(RImg);
  bh4 = createSprite(291, 479, 100, 50);
  bh4.addImage(LGImg);
  bh5 = createSprite(348, 479, 100, 50);
  bh5.addImage('darkImg', darkImg);
  bh5.addImage('bImg', bImg);
  bh5g = 0;
  bh6 = createSprite(405, 479, 100, 50);
  bh6.addImage('darkImg', darkImg);
  bh6.addImage('bImg', bImg);
  bh6g = 0;
  bh7 = createSprite(462, 479, 100, 50);
  bh7.addImage(LGImg);
  bh8 = createSprite(519, 479, 100, 50);
  bh8.addImage(RImg);
  bh9 = createSprite(576, 479, 100, 50);
  bh9.addImage(BRImg);
  bh10 = createSprite(633, 479, 100, 50);
  bh10.addImage('darkImg', darkImg);
  bh10.addImage('bImg', bImg);
  bh10g = 0;
  bh11 = createSprite(690, 479, 100, 50);
  bh11.addImage('darkImg', darkImg);
  bh11.addImage('bImg', bImg);
  bh11g = 0;
  bh12 = createSprite(747, 479, 100, 50);
  bh12.addImage(DBImg);
  bh13 = createSprite(804, 479, 100, 50);
  bh13.addImage(LGImg);
  bh14 = createSprite(861, 479, 100, 50);
  bh14.addImage(OImg);
  bh15 = createSprite(918, 479, 100, 50);
  bh15.addImage(YImg);


  bi1 = createSprite(120, 536, 100, 50);
  bi1.addImage(DBImg);
  bi2 = createSprite(177, 536, 100, 50);
  bi2.addImage(PImg);
  bi3 = createSprite(234, 536, 100, 50);
  bi3.addImage(OImg);
  bi4 = createSprite(291, 536, 100, 50);
  bi4.addImage(BLImg);
  bi5 = createSprite(348, 536, 100, 50);
  bi5.addImage('darkImg', darkImg);
  bi5.addImage('bImg', bImg);
  bi5g = 0;
  bi6 = createSprite(405, 536, 100, 50);
  bi6.addImage('darkImg', darkImg);
  bi6.addImage('bImg', bImg);
  bi6g = 0;
  bi7 = createSprite(462, 536, 100, 50);
  bi7.addImage(DGImg);
  bi8 = createSprite(519, 536, 100, 50);
  bi8.addImage(LBImg);
  bi9 = createSprite(576, 536, 100, 50);
  bi9.addImage(OImg);
  bi10 = createSprite(633, 536, 100, 50);
  bi10.addImage('darkImg', darkImg);
  bi10.addImage('bImg', bImg);
  bi10g = 0;
  bi11 = createSprite(690, 536, 100, 50);
  bi11.addImage('darkImg', darkImg);
  bi11.addImage('bImg', bImg);
  bi11g = 0;
  bi12 = createSprite(747, 536, 100, 50);
  bi12.addImage(LBImg);
  bi13 = createSprite(804, 536, 100, 50);
  bi13.addImage(BRImg);
  bi14 = createSprite(861, 536, 100, 50);
  bi14.addImage(PImg);
  bi15 = createSprite(918, 536, 100, 50);
  bi15.addImage(DGImg);


  bj1 = createSprite(120, 593, 100, 50);
  bj1.addImage(LGImg);
  bj2 = createSprite(177, 593, 100, 50);
  bj2.addImage(RImg);
  bj3 = createSprite(234, 593, 100, 50);
  bj3.addImage(YImg);
  bj4 = createSprite(291, 593, 100, 50);
  bj4.addImage(LBImg);
  bj5 = createSprite(348, 593, 100, 50);
  bj5.addImage(darkImg);
  bj5g = 0;
  bj6 = createSprite(405, 593, 100, 50);
  bj6.addImage(darkImg);
  bj6g = 0;
  bj7 = createSprite(462, 593, 100, 50);
  bj7.addImage(PImg);
  bj8 = createSprite(519, 593, 100, 50);
  bj8.addImage(DBImg);
  bj9 = createSprite(576, 593, 100, 50);
  bj9.addImage(YImg);
  bj10 = createSprite(633, 593, 100, 50);
  bj10.addImage(darkImg);
  bj10g = 0;
  bj11 = createSprite(690, 593, 100, 50);
  bj11.addImage(darkImg);
  bj11g = 0;
  bj12 = createSprite(747, 593, 100, 50);
  bj12.addImage(RImg);
  bj13 = createSprite(804, 593, 100, 50);
  bj13.addImage(YImg);
  bj14 = createSprite(861, 593, 100, 50);
  bj14.addImage(DBImg);
  bj15 = createSprite(918, 593, 100, 50);
  bj15.addImage(LGImg);

  ball = createSprite(displayWidth/2, displayHeight/1.21, 15, 15);
  ball.addImage(ballImg);
  ball.scale = 0.20;
  ball.velocityY = 10;
}

function draw() {
  background(backImg);

  paddle.x = mouseX;

  if (ball.bounceOff(paddle)) {
    ball.velocityX = random(-8, 8);
    ball.velocityY = random(-8, -6);
  }
  ball.bounceOff(w1);
  ball.bounceOff(w2);
  ball.bounceOff(w3);

  if (paddle.x <= 50) {
    paddle.x = 50;
  }

  if (paddle.x >= 974) {
    paddle.x = 974;
  }


  if (ball.bounceOff(ba1)){
    ba1.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(ba2)){
    ba2.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(ba3)){
    ba3.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(ba4)){
    ba4.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(ba5)){
    ba5.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(ba6)){
    ba6.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(ba7)){
    ba7.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(ba8)){
    ba8.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(ba9)){
    ba9.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(ba10)){
    ba10.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(ba11)){
    ba11.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(ba12)){
    ba12.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(ba13)){
    ba13.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(ba14)){
    ba14.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(ba15)){
    ba15.destroy();
    score = score + 5;
     
  }


  if (ball.bounceOff(bb1)){
    bb1.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bb2)){
    bb2.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bb3)){
    bb3.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bb4)){
    bb4.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bb5)){
    bb5.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bb6)){
    bb6.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bb7)){
    bb7.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bb8)){
    bb8.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bb9)){
    bb9.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bb10)){
    bb10.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bb11)){
    bb11.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bb12)){
    bb12.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bb13)){
    bb13.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bb14)){
    bb14.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bb15)){
    bb15.destroy();
    score = score + 5;
     
  }


  if (ball.bounceOff(bc1)){
     
    bc1.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bc2)){
     
    bc2.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bc3)){
     
    bc3.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bc4)){
     
    bc4.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bc5)){
     
    bc5.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bc6)){
     
    bc6.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bc7)){
     
    bc7.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bc8)){
     
    bc8.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bc9)){
     
    bc9.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bc10)){
     
    bc10.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bc11)){
     
    bc11.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bc12)){
     
    bc12.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bc13)){
     
    bc13.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bc14)){
     
    bc14.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bc15)){
     
    bc15.destroy();
    score = score + 5;
     
  }


  if (ball.bounceOff(bd1)){
     
    bd1.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bd2)){
     
    bd2.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bd3)){
     
    bd3.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bd4)){
     
    bd4.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bd5)){
     
    bd5.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bd6)){
     
    bd6.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bd7)){
     
    bd7.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bd8)){
     
    bd8.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bd9)){
     
    bd9.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bd10)){
     
    bd10.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bd11)){
     
    bd11.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bd12)){
     
    bd12.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bd13)){
     
    bd13.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bd14)){
     
    bd14.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bd15)){
     
    bd15.destroy();
    score = score + 5;
     
  }


  if (ball.bounceOff(be1)){
     
    be1.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(be2)){
     
    be2.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(be3)){
     
    be3.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(be4)){
     
    be4.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(be5)){
     
    be5.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(be6)){
     
    be6.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(be7)){
     
    be7.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(be8)){
     
    be8.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(be9)){
     
    be9.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(be10)){
     
    be10.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(be11)){
     
    be11.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(be12)){
     
    be12.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(be13)){
     
    be13.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(be14)){
     
    be14.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(be15)){
     
    be15.destroy();
    score = score + 10;
     
  }


  if (ball.bounceOff(bf1)){
     
    bf1.destroy();
     
    score = score + 10;
  }
  if (ball.bounceOff(bf2)){
     
    bf2.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bf3)){
     
    bf3.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bf4)){
     
    bf4.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bf5)){
     
    bf5.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bf6)){
     
    bf6.destroy();
     
    score = score + 10;
  }
  if (ball.bounceOff(bf7)){
     
    bf7.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bf8)){
     
    bf8.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bf9)){
     
    bf9.destroy();
     
    score = score + 10;
  }
  if (ball.bounceOff(bf10)){
     
    bf10.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bf11)){
     
    bf11.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bf12)){
     
    bf12.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bf13)){
     
    bf13.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bf14)){
     
    bf14.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bf15)){
     
    bf15.destroy();
    score = score + 10;
     
  }


  if (ball.bounceOff(bg1)){
     
    bg1.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bg2)){
     
    bg2.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bg3)){
     
    bg3.destroy();
    score = score + 5;
     

  }
  if (ball.bounceOff(bg4)){
     
    bg4.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bg5)){
     
    bg5.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bg6)){
     
    bg6.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bg7)){
     
    bg7.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bg8)){
     
    bg8.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bg9)){
     
    bg9.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bg10)){
     
    bg10.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bg11)){
     
    bg11.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bg12)){
     
    bg12.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bg13)){
     
    bg13.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bg14)){
     
    bg14.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bg15)){
     
    bg15.destroy();
    score = score + 5;
     
  }


  if (ball.bounceOff(bh1)){
     
    bh1.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bh2)){
    bh2.destroy();
     
    score = score + 5;
     
  }
  if (ball.bounceOff(bh3)){
     
    bh3.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bh4)){
     
    bh4.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bh5)){
     
    bh5.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bh6)){
     
    bh6.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bh7)){
     
    bh7.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bh8)){
     
    bh8.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bh9)){
     
    bh9.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bh10)){
     
    bh10.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bh11)){
     
    bh11.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bh12)){
     
    bh12.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bh13)){
     
    bh13.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bh14)){
     
    bh14.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bh15)){
     
    bh15.destroy();
    score = score + 5;
     
  }


  if (ball.bounceOff(bi1)){
     
    bi1.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bi2)){
     
    bi2.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bi3)){
     
    bi3.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bi4)){
     
    bi4.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bi5)){
     
    bi5.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bi6)){
     
    bi6.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bi7)){
     
    bi7.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bi8)){
     
    bi8.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bi9)){
     
    bi9.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bi10)){
     
    bi10.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bi11)){
     
    bi11.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bi12)){
     
    bi12.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bi13)){
     
    bi13.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bi14)){
     
    bi14.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bi15)){
     
    bi15.destroy();
    score = score + 5;
     
  }


  if (ball.bounceOff(bj1)){
     
    bj1.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bj2)){
     
    bj2.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bj3)){
     
    bj3.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bj4)){
     
    bj4.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bj5)){
     
    bj5.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bj5)){
     
    bj5.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bj6)){
     
    bj6.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bj7)){
    bj7.destroy();
     
    score = score + 5;
     
  }
  if (ball.bounceOff(bj8)){
     
    bj8.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bj9)){
     
    bj9.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bj10)){
     
    bj10.destroy();
    score = score + 10;
     
  }
  if (ball.bounceOff(bj11)){
    bj11.destroy();
     
    score = score + 10;
     
  }
  if (ball.bounceOff(bj12)){
     
    bj12.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bj13)){
     
    bj13.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bj14)){
     
    bj14.destroy();
    score = score + 5;
     
  }
  if (ball.bounceOff(bj15)){
     
    bj15.destroy();
    score = score + 5;
     
  }
  
  textSize(30);
  text('Score: '+score, 20, 30);


  drawSprites();
}