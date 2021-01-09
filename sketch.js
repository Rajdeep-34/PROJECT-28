
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var tree1, rock1, ground1, string1;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;
var world, boy;
var launchingForce = 100;

function preload(){
	boy = loadImage("sprites/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	
	

	rock1 = new rock(235,420,30); 

	mango1 = new mango(1100,120,20);
    mango2 = new mango(1200,260,20);
	mango3 = new mango(1010,140,20);
	mango4 = new mango(1050,190,20);
	mango5 = new mango(1100,200,20);
	mango6 = new mango(1000,275,20);
	mango7 = new mango(960,290,20);
	mango8 = new mango(1140,150,20);
	mango9 = new mango(1100,230,20);
	mango10 = new mango(1200,210,20);
	mango11 = new mango(1120,200,20);
	mango12 = new mango(1010,180,20);

	tree1 = new tree(1050,600);
	ground1  = new ground(width/2,600,width,20);
	string1 = new string(rock1.body, {x:280,y:480});

  var render = Render.create({
    element : document.body,
    engine : engine,
    options : {
      width : 1300,
      height : 600,
      wireframes : false
    }
  });
	
	Engine.run(engine);
 
}

function draw() {

  background(230);

  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  
  
  
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  rock1.display();

  ground1.display();
  string1.display();

  detectollision(rock1,mango1);
  detectollision(rock1,mango2);
  detectollision(rock1,mango3);
  detectollision(rock1,mango4);
  detectollision(rock1,mango5);
  detectollision(rock1,mango6);
  detectollision(rock1,mango7);
  detectollision(rock1,mango8);
  detectollision(rock1,mango9);
  detectollision(rock1,mango10);
  detectollision(rock1,mango11);
  detectollision(rock1,mango12);
}

function mouseDragged()
{
	Matter.Body.setPosition(rock1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	string1.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(rock1.body, {x:235, y:420}) 
	  string1.attach(rock1.body);
	}
  }

  function detectollision(lstone,lmango){

  mangoBodyPosition = lmango.body.position
  rockBodyPosition = lstone.body.position
  
  var distance=dist(rockBodyPosition.x, rockBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  	if(distance<=lmango.r+lstone.r)
    {
      
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }