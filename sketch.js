const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var box;
var RedBlock, GreenBlock, BlueBlock, OrangeBlock;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    box = new Box(200,300,50,50);

    RedBlock = new redBlock(80,390,175,20);
    GreenBlock = new greenBlock(200,390,175,20);
    BlueBlock = new blueBlock(320,390,175,20);
    OrangeBlock = new orangeBlock(440,390,175,20);
} 

function draw(){
    background(0);
    Engine.update(engine);

    box.display();

   RedBlock.display();
   GreenBlock.display();
   BlueBlock.display();
   OrangeBlock.display();

   changeColor();
}

function changeColor(){
    if(box.isTouching(RedBlock)){
        box.shapeColor = "red";
    }

    if(box.isTouching(GreenBlock)){
        box.shapeColor = "green";
    }

    if(box.isTouching(BlueBlock)){
        box.shapeColor = "blue";
    }

    if(box.isTouching(OrangeBlock)){
        box.shapeColor = "orange";
    }
}
