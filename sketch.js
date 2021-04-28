//..
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, g1, g2;

var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11;
var b12, b13, b14, b15, b16, b17, b18, b19, b20
var b21, b22, b23, b24, b25;

var polygon, h;
var chain;

function preload() {
  h = loadImage("hexagon.png");
}

function setup() {
  createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height-30,width,25);
  g1 = new Ground(width/3+90, height-90, width/4, 15);
  g2 = new Ground(760,170,width/5.6,15);

  b1 = new Block(334,274);
  b2 = new Block(364,274);
  b3 = new Block(394,274);
  b4 = new Block(424,274);
  b5 = new Block(454,274); 
  b6 = new Block(484,274);
  b7 = new Block(514,274);

  b8 = new Block(364,234);
  b9 = new Block(394,234);
  b10 = new Block(424,234);
  b11 = new Block(454,234);
  b12 = new Block(484,234);

  b13 = new Block(394,204);
  b14 = new Block(424,204);
  b15 = new Block(454,204);

  b16 = new Block(424,164);

  b17 = new Block(700,140);
  b18 = new Block(730,140);
  b19 = new Block(760,140);
  b20 = new Block(790,140);
  b21 = new Block(820,140);

  b22 = new Block(730,100);
  b23 = new Block(760,100);
  b24 = new Block(790,100);

  b25 = new Block(760,60);  

  polygon = Bodies.circle(200,200,15, {density:1.0, restitution: 0});
  World.add(world, polygon);
  
  chain = new Slingshot(this.polygon,{x: 200, y: 200});

  Engine.run(engine);
}

function draw() {
  Engine.update(engine);

  rectMode(CENTER);
  getBackgroundImg();

  fill("red");
  text('Drag the hexagonal stone and release it, to launch it towards the blocks...', 30,40);
  
  ground.display();
  g1.display();
  g2.display();

  fill("lightblue");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

  fill("pink");
  b8.display();
  b9.display();
  b10.display();
  b11.display(); 
  b12.display();

  fill("emerald");
  b13.display();
  b14.display();
  b15.display();

  fill("grey");
  b16.display();

  fill("lightblue");
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();

  fill("pink");
  b22.display();
  b23.display();
  b24.display();

  fill("grey");
  b25.display();

  chain.display();

  imageMode(CENTER);
  image(h,polygon.position.x, polygon.position.y, 40,40);

  //text(mouseX + " : " + mouseY, 100,100)
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode===32)
  chain.attach(polygon);
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      background("white");
  }
  else{
    background("black");
  }
}