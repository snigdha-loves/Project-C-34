const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;

var garlic;
var zombie1,zombie2,zombie3,zombie4, zombie;

function preload() {
  zombie2 = loadImage ("./Images/zombie2.png");
  zombie3 = loadImage ("./Images/zombie3.png");
  zombie4 = loadImage ("./Images/zombie4.png");

  backgroundImage = loadImage("./Images/background.jpg");
}

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world; 

  zombie = new Zombie (200,200,100,100);

  wall = new Wall(790,400,20,800);
  wall2 = new Wall(10,400,20,800);
  wall3 = new Wall(400,10,800,20);
  wall4 = new Wall(400,790,800,20);

  garlic = new Garlic(400,400,100,100);
}

function draw() {
  background(51);
  Engine.update(engine);

  if (keyIsDown (UP_ARROW)){
    zombie.x += 10;
  }

  wall.show();
  wall2.show();
  wall3.show();
  wall4.show();
  garlic.show();
  zombie.show();
}