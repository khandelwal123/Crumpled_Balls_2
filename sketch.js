
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	side1 = new Side(710, 640);
	side2 = new Side(550, 640);
	paper1 = new Paper(100, 20);	
	bottom = new Bottom(730, 750);	

	ground_options = 
	{
		isStatic : true
	}

	ground = Bodies.rectangle(400, 735, 800, 15, ground_options);
	World.add(world, ground);

	Engine.run(engine);  
}


function draw() {
	rectMode(CENTER);
	background(255, 255, 255);

	side1.display();
	side2.display();
	paper1.display();
	bottom.display();
	
	rectMode(CENTER)
	rect(400, 690, 800, 15);

	drawSprites();
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,
			{
				x:750,y:-750
			}
		);
	}
}