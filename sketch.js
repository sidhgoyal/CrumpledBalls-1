
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200,400);

   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
   ball = new Paper(75, 330);
   ground = new Ground(600,380,1200,20);
   side1=new Dustbin(950,310,20,100);
	side2=new Dustbin(1050,310,20,100);
side3=new Dustbin(1000,350,100,20);
}


function draw() {
   rectMode(CENTER);
   background(0);
   
   ball.display();
   ground.display();
   side1.display();
   side2.display();
   side3.display();
 
}

function keyPressed(){ 
	if(keyCode === UP_ARROW){
		 Body.applyForce(ball.body,ball.body.position,{x:90,y:-85}); 
		} 
	}


