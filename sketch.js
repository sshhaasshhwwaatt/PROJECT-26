
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var food1, pizza

function preload()
{
	 food1=loadImage("p1.png")
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

 pizza= createSprite(1000,150,50,50)
pizza.addImage(food1)
pizza.scale=1.6

ground=new Ground(600,490,1200,20)

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

ground.display();

textFont("Bodoni MT Black")
textSize(60)
text(" PIZZA TIME:-",50,70)


textFont("Bodoni MT Black")
textSize(40)
text("Step-1  :- Making Pizza Dough ",100,120)
text("Step-2  :- Making Pizza Sauce ",100,160)
text("Step-3  :- Assembling" ,100,200)
text("Step-4  :- Pizza Topings", 100,240 )
text("Step-5  :- Baking Pizza ",100,280)
text("Step-6  :- Toppings :- Capcicum , Tomato ,  ",100,320)
text("               Jalapeno ,Olive , Panner",100,360)

textFont("Bodoni MT Black")
textSize(60)
text(" Now the Pizza is Ready to eat .",50,420)

  drawSprites();
 
}





