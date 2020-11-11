
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
this.image=LoadImage(dustbingreen.png);
this.image=LoadImage(paper.png);
this.scale=70;
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1=new Dustbin(1200,650);
	paper1=new Paper(200,450,40);
	ground1=new Ground(800,670,1600,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  paper1.display();
  ground1.display();

  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:30,y:-85});

	}
}



