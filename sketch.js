
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//function preload(){}

function setup() {
	createCanvas(1200, 600);
	
	ground=createSprite(600,590,1200,20)
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  groundbody =Bodies.rectangle(600,590,width,20,{isStatic:true});
  World.add(world,groundbody);
  
  boy = new Boy(200,480,20,40);
tree1= new Tree(1000,350,20,20);
stone1= new Stone(110,400,20,20);

slingshot = new SlingShot(stone1.body,{x:110, y:390});
   
mango1 =new mango(900,300,20,20);
mango2 =new mango(1000,200,20,20);
mango3 =new mango(1150,300,20,20);
mango4 =new mango(1100,230,20,20);
mango5 =new mango(1000,280,20,20);
}


function draw() {
  background(0,200,255);
  Engine.update(engine);
  //rectMode(CENTER);

  ground.x = groundbody.position.x;
  ground.y = groundbody.position.y;
  
  boy.display();
  tree1.display();
stone1.display();
slingshot.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();

dectectollision(stone1,mango1);
dectectollision(stone1,mango2);
dectectollision(stone1,mango3);
dectectollision(stone1,mango4);
dectectollision(stone1,mango5);
//dectectcollision(stone1,mango6);

  drawSprites();
 
  
  textSize(20);
  textFont("Courier New");
text("REFRESH TO PLAY AGAIN", 500, 100);


}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function dectectollision(lmango,lstone){

mangoBodyPosition=lmango.body.position
stone1BodyPosition=lstone.body.position

var distance=dist(stone1BodyPosition.x,stone1BodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if (distance<=lmango.r+lmango.r){
Matter.Body.setStatic(lmango.body,false)


}
}