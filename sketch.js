const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    

   

    console.log(ground);
   s1=new Square(200,300,PI/2)
   s2=new Square(290,300,PI/2)
   s3=new Square(380,300,PI/2)
   s4=new Square(470,300,PI/2)
   g1=new Square(200,200,PI/2)
   g2=new Square(290,200,PI/2)
   g3=new Square(380,200,PI/2)
   g4=new Square(470,200,PI/2)
   h1=new Square(800,200,PI/2)
   chain=new Sling(h1.body,{x:800,y:200})
   h3=new Gquare(600,365)

}

function draw(){
    background(0);
    Engine.update(engine);
   
   s1.display()
   s2.display()
   s3.display()
   s4.display()
   g1.display()
   g2.display()
   g3.display()
   g4.display()
   h1.display()
   chain.display()
   h3.display()
   

}

function mouseDragged(){
    Matter.Body.setPosition(h1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    gamestate="launched"
    chain.fly();
}