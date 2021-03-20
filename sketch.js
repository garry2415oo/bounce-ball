const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,object1, object2;


function setup() {
  createCanvas(800,400);
engine=Engine.create();
world= engine.world;
var options= {
  isStatic: true,

}
object1= Bodies.rectangle(400,380,800,20,options);
var options1={
  restitution: 1.5,

}
object2= Bodies.rectangle(500,100,20,20,options1);
World.add(world,object1);
World.add(world,object2);
}

function draw() {
  background("red");  
Engine.update(engine);
rectMode(CENTER) ;
rect(object1.position.x,object1.position.y,800,20);
ellipseMode(RADIUS) ;
ellipse(object2.position.x,object2.position.y,20,20);
}