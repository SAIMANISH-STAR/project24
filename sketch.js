const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    
     Rubber=new Rubber(600, 600,height,width.r-20/2)
     this.width=width;
     this.height=height;

     stoneclass= new stoneclass(1200,320,70,70)
     this.width=70;
     this.height=70;

     Ironclass=new Ironclass(700,350,50,50)
     this.width=width;
     this.height=this.height;

     

     

     
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    Rubber.display();
    stoneclass.display();
    Ironclass.display();
    
    
    

    
 
}