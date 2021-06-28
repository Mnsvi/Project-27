// constants 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// variables 
var hammer, plane, stone, rubber, iron, sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8;

function setup() {
	
	// creating canvas 
	createCanvas(800, 700);

	// engines 
	engine = Engine.create();
	world = engine.world;

	// creating bodies 
	hammer = new Hammer (400,300);
	stone = new Stone (300,670,80,80);
	rubber = new Rubber (500,670,60);
	iron = new Iron (200,670,80,40);
	sand1 = new Sand (450,670,8);
	sand2 = new Sand (451,670,8);
	sand3 = new Sand (452,670,8);
	sand4 = new Sand (453,670,8);
	sand5 = new Sand (454,670,8);
	sand6 = new Sand (455,670,8);
	sand7 = new Sand (456,670,8);
	sand8 = new Sand (457,670,8);
	
	// plane
	plane = Bodies.rectangle(400,700,800,30, {isStatic:true} );
 	World.add(world, plane);

	// running engine
	Engine.run(engine);  
}

function draw() {

  // background 
  background("lightblue");
  
  // updating engine 
  Engine.update(engine);
   
  // displaying objects 
  hammer.display();
  stone.display();
  rubber.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  
  // displaying sprites 
  drawSprites();
}