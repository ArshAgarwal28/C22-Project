const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ball;

var ground;

var slideVal;

var gravVal;

let slider;

function preload() {
  butAnim = loadImage("button.png");
}

function setup() {
  createCanvas(1000, 500);
  engine = Engine.create();
  world = engine.world;
  
  slider = createSlider(0, 100, 50);
  slider.position(675, 300);
  //slider.input = map(engine.world.gravityY, slider.min, slider.max, 0, 3);

  var propert = {restitution: 0.5};
  ball = Bodies.circle(200, 200, 20, propert);
  World.add(world, ball);

  var props = {isStatic: true};
  ground = Bodies.rectangle(200, height-10, 400, 10, props);
  World.add(world, ground);
}

function draw(){
  background("lightGreen");
  Engine.update(engine);

  
  sliderVal = slider.value();
  engine.world.gravity.y = map(sliderVal, 0, 100, 0, 5);;

  console.log(engine.world)

  
  
  //restituteVal = sliderVal / 1;
  //propert = {restitution: restituteVal}

  ellipseMode(CENTER);
  fill("red");
  ellipse(ball.position.x, ball.position.y, 20, 20);

  fill("green");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 10);

  text("100", 815, 317);
  text("1", 655, 315);
  text(sliderVal, 200, 200)
  

  drawSprites();
}