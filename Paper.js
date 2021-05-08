class Paper{

    constructor(x,y,radius){

	var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
       density:1.2 
    }
            this.radius=radius;            
            this.body=Bodies.circle(x,y,radius/2,options);
        World.add(world,this.body);
        
        }   



display() { 
  var paperpos=this.body.position;
  var angle=this.body.angle;
   push() 
   translate(paperpos.x, paperpos.y);
   fill("purple");
   ellipseMode(RADIUS)
   ellipse(0,0,this.radius); 
    pop() 
}
}