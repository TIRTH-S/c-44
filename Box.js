// class, const, dis,this

class Box{
  constructor(x,y){
    this.height = 20;
    this.width= 20
    var op={
      isStatic:true
    }
    this.body = Bodies.rectangle(x,y,20,20,op)
    World.add(world,this.body)
    this.trajectory =[];
  }
  show(){
    
      // var position = [this.body.position.x, this.body.position.y];
      // this.trajectory.push(position);
    ellipse(this.body.position.x, this.body.position.y,this.width,this.height)

    // for(var i=0; i<this.trajectory.length; i++){
    //   noStroke()
    // ellipse(this.trajectory[i][0], this.trajectory[i][1],this.width,this.height)
    // }
  }
}