
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var launchingForce = 100
function preload(){
	boy = loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
    stone1=new stone(235,420,30)
	mango1 = new mango(1100, 100, 30)
	mango2 = new mango(1170, 130, 30)
	mango3 = new mango(1010, 140, 30)
	mango4 = new mango(1000, 70, 30)
	mango5 = new mango(1100, 70, 30)
	mango6 = new mango(1000, 230, 30)
	mango7 = new mango(900, 230, 30)
	mango8 = new mango(1140, 150, 30)
	mango9 = new mango(1100, 230, 30)
	mango10 = new mango(1200, 200, 30)
	mango11 = new mango(1200, 50, 30)
	mango12 = new mango(900, 160, 30)
	tree1 = new tree(1050,580)
	ground1 = new ground(width/2, 600, width, 20)
	chain1 = new chain(stone1.body, {x:235, y:420})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  textSize(25)
  text("Press Space To Try Again!", 50, 50)
  image(boy, 200, 340, 200, 300)
  drawSprites();
  stone1.display()
  tree1.display()
  mango1.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  mango11.display()
  mango12.display()
  ground1.display()
  chain1.display()
  detectCollision(stone1, mango1)
  detectCollision(stone1, mango2)
  detectCollision(stone1, mango3)
  detectCollision(stone1, mango4)
  detectCollision(stone1, mango5)
  detectCollision(stone1, mango6)
  detectCollision(stone1, mango7)
  detectCollision(stone1, mango8)
  detectCollision(stone1, mango9)
  detectCollision(stone1, mango10)
  detectCollision(stone1, mango11)
  detectCollision(stone1, mango12)

}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	chain1.fly()
}

function keyPressed(){
	if(keyCode==32){
		Matter.Body.setPosition(stone1.body, {x:235, y:420})
		chain1.attach(stone1.body)
	}
}

function detectCollision(lstone, lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body, false)
	}
}




