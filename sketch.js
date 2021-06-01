const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var dground, tree,treeimg;
var boy, boyimg;
var stones;
var backgroundImg
var coconut1,coconut2,coconut3,coconut4,coconut5,coconut6,coconut7,coconut8,coconut9,coconut10;

var bg = "background1.jpg";

function preload(){
	treeimg=loadImage("tree.png");
	treeimg.scale=1.0
	boyimg=loadImage("boy.png");
	boyimg.scale=2.0
	getBackgroundImg();
}

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

	dground=new Ground();
	stones=new Stone(100,460,40,20);
	coconut1=new coconut(600,290,34,10);
	coconut2=new coconut(855,325,35);
	coconut3=new coconut(670,260,35);
	coconut4=new coconut(730,200,35);
	coconut5=new coconut(710,320,36);
	coconut6=new coconut(780,250,35);
	coconut7=new coconut(825,170,33);
	coconut8=new coconut(880,260,35);
	coconut9=new coconut(940,220,35);
	coconut10=new coconut(980,305,35);

	attach=new Throw(stones.body,{x:100,y:465});

	tree=createSprite(775,368);
	tree.addImage(treeimg);
	tree.scale=0.42;

	boy=createSprite(160,550,);
	boy.addImage(boyimg);
	boy.scale=0.125;

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  if(backgroundImg)
  background(backgroundImg);

  fill("gold");
  textSize(18);
  text("- Press spacebar for more chances -",50,50);

  detectCollision(stones,coconut1);
  detectCollision(stones,coconut2);
  detectCollision(stones,coconut3);
  detectCollision(stones,coconut4);
  detectCollision(stones,coconut5);
  detectCollision(stones,coconut6);
  detectCollision(stones,coconut7);
  detectCollision(stones,coconut8);
  detectCollision(stones,coconut9);
  detectCollision(stones,coconut10);

  drawSprites();

  stones.display();
  dground.display();
 coconut1.display();
 coconut2.display();
 coconut3.display();
 coconut4.display();
 coconut5.display();
 coconut6.display();
 coconut7.display();
 coconut8.display();
 coconut9.display();
 coconut10.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(lstones,lmango){

	if(lstones.body.position.x- lmango.body.position.x <lmango.diametre + lstones.diametre
		&& lmango.body.position.x - lstones.body.position.x  < lmango.diametre + lstones.diametre
		&&lstones.body.position.y -lmango.body.position.y < lmango.diametre + lstones.diametre
		&& lmango.body.position.y - lstones.body.position.y < lmango.diametre + lstones.diametre){
		Matter.Body.setStatic(lmango.body,false);
	}

}
 
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
	}
}


async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "background1.jpg";
    }
	 else{
        bg = "background2.jpg";
    }

   
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}