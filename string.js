class String {
    constructor (bodyA,pointB){
var options = {
 bodyA : bodyA,
 pointB : pointB,
 stiffness : 2.5,
 length : 100
}

this.string = Constraint.create(options) ;
World.add(world,this.string)  ;

}

 display(){
var pointA = this.string.bodyA.position;
var pointB = this.string.pointB; 
strokeWeight(4);
line (pointA.x,pointA.y,pointB.x,pointB.y);

 }


}
/*class String {
    constructor (body1, body2){
     var options = {
         bodyA: body1,
         bodyB: body2,
         stiffness: 1,
         length:30,
     } 
     this.string = Constraint.create(options);
     World.add(world,this.string);
    }
   
    display(){
        var p1 = this.string.bodyA.position;
        var p2 = this.string.bodyB.position;
        strokeweight(10);
        line (p1.x,p1.y,p2.x,p2.y);
    }
}*/