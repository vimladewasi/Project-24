class Dustbin{
    constructor(x,y,options){
        options = {
		isStatic: true,
	  };
      
    dustbin = Bodies.circle(width/2 , 200 , 5 ,
         {restitution:0.1, isStatic:true});
    World.add(world, dustbin);

     var LeftBox = createSprite(810, 600, 20, 100);
     LeftBox.shapeColor = color("white");
     var LeftBody = Bodies.rectangle(810, 600, 20, 100, options);
     World.add(world, LeftBody);

     var CenterBox = createSprite(900, 660, 200, 20);
     CenterBox.shapeColor = color("white");
     var CenterBody = Bodies.rectangle(900, 660, 200, 20, options);
     World.add(world, CenterBody);
    
     var RightBox = createSprite(990, 600, 20, 100);
     RightBox.shapeColor = color("white");
     var RightBody = Bodies.rectangle(990, 600, 20, 100, options);
     World.add(world, RightBody);


    }


}