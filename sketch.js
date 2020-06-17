var base,ball,string1,ball1,string2,ball2,string3;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
    engine = Engine.create();
  world = engine.world;
    createCanvas(500,500);
   
base = new Base (250,100,250,30);
ball = new Ball (250,150,40);
ball1 = new Ball(100,150,40);
ball2 = new Ball(400,150,40);
string1 = new String(ball.body,{x:250,y:100});
string2 = new String(ball1.body,{x:210,y:100});
string3 = new String(ball2.body,{x:290,y:100});
}

function draw() {
    background("green");
    Engine.update(engine);
    base.display();
    ball.display();
    ball1.display();
    ball2.display();
    string1.display();
    string2.display();
    string3.display();
    textSize(30);
    text ("Click on ball1 and drag it!!",100,300);
    
}
function mouseDragged()
{
  Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}