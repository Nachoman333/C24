const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(400,350);
	ground = new Ground(400,690,800,10);
	stone = new Stone(200,600,100,100);
	rubber = new Rubber(600,600,25);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  drawSprites();
 
}



