const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var ground1;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var canvas;

function setup() {
	
	
	canvas = createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	/*let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world,mConstraint);
*/
	ground1 = new Ground(700,height-10,1400,30);

	pendulum1 = new Pendulum(360,200,"black");
	sling1 = new Sling(pendulum1.body,{x:360,y:100});

	pendulum2 = new Pendulum(490,200,"black");
	sling2 = new Sling(pendulum2.body,{x:490,y:100});

	pendulum3 = new Pendulum(620,200,"black");
	sling3 = new Sling(pendulum3.body,{x:620,y:100});

	pendulum4 = new Pendulum(750,200,"black");
	sling4 = new Sling(pendulum4.body,{x:750,y:100});

	pendulum5 = new Pendulum(880,200,"black");
	sling5 = new Sling(pendulum5.body,{x:880,y:100});
	
	
	 Engine.run(engine);
  
}


function draw() {
	background(206,237,227);
	Engine.update(engine);

	pendulum1.display();	
	sling1.display();

	pendulum2.display();
	sling2.display();

	pendulum3.display();
	sling3.display();

	pendulum4.display();
	sling4.display();

	pendulum5.display();
	sling5.display();
	
	ground1.display();
	
 
}

function mouseDragged(){
	Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
}
