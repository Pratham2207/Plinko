const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;

var particles = []

var divisions = [];

var plinkos = [];

var columns = 10;
var rows = 10;

function setup() {
  createCanvas(600,800);
  engine = Engine.create();
  world = engine.world;
  
  newParticle();
  var spacing = width/columns
  for(var k = 0; k < rows; k++){
    for(var i = 0; i < columns; i++ ){
      var x = i*spacing;
      if(k % 2 == 0){
        x += spacing/2
      }
      var y = spacing + k * spacing;
      var plinko = new Plinko(x,y,4);
      plinkos.push(plinko);
    }
  }
  ground = new Ground(300,750,width,10);

  var division = new Division(width/2,height+50,width,100);
  divisions.push(division);

  for(var i = 0; i < columns+1; i++){
    var x = i * spacing;
    var h = 50;
    var w = 10;
    var y = 720 ;
    var division = new Division(x,y,w,h);
    divisions.push(division);
  }
}

function draw() {
  if(frameCount % 60 == 0){
  newParticle();
   }
  background(0);  
  Engine.update(engine);
  ground.display();
  for(var i = 0; i < particles.length; i++){
particles[i].display()
  }
  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display()
      }
      for(var i = 0; i < divisions.length; i++){
        divisions[i].display()
          }
}
function newParticle(){
  var particle = new Particle(300,0,10);
    particles.push(particle);
}