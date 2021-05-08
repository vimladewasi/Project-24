var paper, dustbin, ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	
	world = engine.world;
	
	dustbin= new Dustbin(800,500);

	paper = new Paper(100,100,35,35);

	ground = new Ground(600,690,1200,20);


	Engine.run(engine);
	
}


function draw() {
  
  background("black");

  paper.display();
 ground.display();
  Engine.update(engine);

 drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-65});
	}
}

