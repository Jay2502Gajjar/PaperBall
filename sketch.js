
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball;
var base;
var pillar1 , pillar2;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   


	ground = new Ground(500,500,1200,10);

	paperball = new ball(100, 300, 20);

	base = new base1 (585,490,150,10);

	pillar1 = new wall(515,460,10,70);

	pillar2 = new wall(654,460,10,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  ground.display();
  paperball.display();
  base.display();
  pillar1.display();
  pillar2.display();

  drawSprites();
  keyPressed();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) 
	   {
	   Matter.Body.applyForce( paperball.body, paperball.body.position, {x:2, y:-4});
	 }

	}