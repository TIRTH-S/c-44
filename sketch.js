const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground
var arr=[]
var drawControoler = 0;

function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  box1 = Bodies.rectangle(200, -1000, 30, 30);
  World.add(world, box1)
  
  
  
   // box2 = new Box(100,300)
   // box3= new Box(10,300)
   // box5 = new Box(100,30)
   // box6 = new Box(150,300)
  var option ={
    isStatic : true
  }
  
  ground = Bodies.rectangle(200,350,400,20,option)
 World.add(world, ground)

}

function draw(){
 background("cyan");
if(drawControoler==1){
for(var i=0; i<arr.length; i++){
  console.log("draw")
  console.log(arr[i][0])
   ellipse(arr[i][0],arr[i][1], 10, 10);
}
  
}
 
 
 
  fill("red");
  noStroke()
  
    // console.log(arr[0][0])
 
  // box2.body.position.x = mouseX
  // box2.body.position.y = mouseY
  Engine.update(engine);
  rectMode(CENTER)
  rect(box1.position.x, box1.position.y,30,30);
 rect(ground.position.x, ground.position.y,400,20)
 
  // box3.show()
  // box6.show()
  // box5.show()
  
 
}

function mouseDragged(){
  drawControoler=1
  box2 = new Box(100,300)
   
  console.log(box2.body.position.x);
  Matter.Body.setPosition(box2.body,{x:mouseX,y:mouseY})
  var pos = [mouseX,mouseY]
  arr.push(pos)
  
}

function mouseReleased(){
  // for(var i=0; i<box2.trajectory.length; i++){
  Matter.Body.setStatic(box2.body,{isStatic:false})
    // }
}

