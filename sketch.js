var player1, player2, rio, muro1, muro2, muro3,muro4, muro5, muro6, grupoMuro, bala,
 p1ad, p1ae, p1ce, p1cd, p1e, p1d, p2ad, p2ae, p2cd, p2cd2, p2ce, p2ce2, p2e, p2d;

function preload () {

  p1ad = loadAnimation("imagens/player1armaDir.png");
  p1ae = loadAnimation("imagens/player1armaEsq.png");
  p1d = loadAnimation("imagens/player1Dir.png");
  p1e = loadAnimation("imagens/player1Esq.png");
  p1cd = loadAnimation("imagens/player1correndoDir.png","imagens/player1correndoDir2.png");
  p1ce = loadAnimation("imagens/player1correndoEsq.png","imagens/player1correndoEsq2.png");
  
  p2ad = loadAnimation("imagens/player2armaDir.png");
  p2ae = loadAnimation("imagens/player2armaEsq.png");
  p2d = loadAnimation("imagens/player2Dir.png");
  p2e = loadAnimation("imagens/player2Esq.png");
  p2cd = loadAnimation("imagens/player2correndoDir.png","imagens/player2correndoDir2.png");
  p2ce = loadAnimation("imagens/player2correndoEsq.png","imagens/player2correndoEsq2.png");


  grupoMuro = createGroup();
}

function setup () {
  createCanvas(600,600);

  player1 = createSprite(150,300,15,15);
  player1.addAnimation("p1parado",p1d);
  player1.addAnimation("p1cd",p1cd);
  player1.addAnimation("p1ce",p1ce);

  player2 = createSprite(450,300,15,15);
  player2.addAnimation("p2parado",p2e);


  rio = createSprite(300,300,40,600);
  rio.shapeColor = "blue";

  muro1 = createSprite(165,510,25,100);
  muro1.shapeColor = "#575959";
  grupoMuro.add(muro1);

  muro2 = createSprite(185,285,30,130);
  muro2.shapeColor = "#575959";
  grupoMuro.add(muro2);

  muro3 = createSprite(100,100,25,110);
  muro3.shapeColor = "#575959";
  grupoMuro.add(muro3);

  muro4 = createSprite(470,490,30,100);
  muro4.shapeColor = "#575959";
  grupoMuro.add(muro4);

  muro5 = createSprite(400,300,28,125);
  muro5.shapeColor = "#575959";
  grupoMuro.add(muro5);

  muro6 = createSprite(490,90,25,115);
  muro6.shapeColor = "#575959";
  grupoMuro.add(muro6);


}

function draw (){
  background("#c7b17f");

//player1 agachando/desvio  
  if(player1.isTouching(grupoMuro) && keyDown(SHIFT)) {
    //player1.changeImage();

  }

//player2 agachando/desvio  
  if(player1.isTouching(grupoMuro) && keyDown(SHIFT)) {

  }


//movimentação do player1
  if (keyWentDown("a")) {
      player1.x += -5;
      player1.addAnimation("p1ce",p1ce);
  }
  if (keyWentDown("d")) {
    player1.x += 5;
    player1.addAnimation("p1cd",p1cd);
  }
  if (keyDown("s")) {
    player1.y += 5;
  }
  if (keyDown("w")) {
    player1.y += -5;
  }

//movimentação do player2
  if (keyDown(LEFT_ARROW)) {
    player2.x += -5;
  }
  if (keyDown(RIGHT_ARROW)) {
  player2.x += 5;
  }
  if (keyDown(DOWN_ARROW)) {
  player2.y += 5;
  }
  if (keyDown(UP_ARROW)) {
  player2.y += -5;
  }

  //colisões
  player1.bounceOff(muro1);
  player1.bounceOff(muro2);
  player1.bounceOff(muro3);
  player1.bounceOff(rio);

  player2.bounceOff(muro4);
  player2.bounceOff(muro5);
  player2.bounceOff(muro6);
  player2.bounceOff(rio);

  
  //createEdgeSprites();
  //player1.bounceOff(edges);
  drawSprites();
}


//tiro do player 1
function tiro1() {

  if(keyDown("q")) {





  }

}

//tiro do player2
function tiro2() {
//48 = "cntrl"
  if(keyDown(48)) {





  }

}