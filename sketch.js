var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var Bola;
var Bola2;
var modo = "jogar";
var score =0;
var rodadas =0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //criar objetos de divisão
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //crie a 1ª linha de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,135));
  }

  //crie a 2ª linha de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,235));
  }

  //crie a 3ª linha de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,335));
  }

  
  //crie a 4ª linha de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,435));
  }
    
}


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
 
  textSize(40);
  if(score>0){
    fill("Green");
    text("Pontos: "+ score,50,70);
  }

  if(score<0){
    fill("Red");
    text("Pontos: "+ score,50,70);
  }

  if(score===0){
    fill("white")
    text("Pontos: "+ score,50,70);
  }
  
  

  texto();

  

  if(rodadas===5){
    modo = "parado";
  }
  
  //exibir os plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //exibir os divisões
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //exibir as partículas
  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  Pontos();

  

}


function mousePressed(){
   if(modo!=="parado"){
      Bola = new Particle(mouseX,-5);
      rodadas++
   }
}

function texto(){
  
  textSize(50);
  fill("green");
  text("2",25,600);
  text("0",25,650);
  text("0",25,700);
  fill("red");
  text("2",105,600);
  text("0",105,650);
  text("0",105,700);
  text("2",745,600);
  text("0",745,650);
  text("0",745,700);
  fill("green");
  text("2",665,600);
  text("0",665,650);
  text("0",665,700);
  text("1",265,600);
  text("1",585,600);
  text("0",265,700);
  text("0",585,650);
  text("0",265,650);
  text("0",585,700);
  text("5",185,600);
  text("0",185,650);
  text("0",185,700);
  text("1",425,600);
  text("0",425,650);
  text("0",425,700);
  text("0",425,750);
  fill("red");
  text("5",345,600);
  text("0",345,650);
  fill("green");
  text("5",505,600);
  text("0",505,650);

 
}

function Pontos(){
  if(Bola!=null){
    Bola.display();
    console.log(Bola);
    if(Bola.body.position.y>760){
      if(Bola.body.position.x<80 && Bola.body.position.x>0){
        score = score + 200;
        Bola = null;
        
      }
      else if(Bola.body.position.x<160 && Bola.body.position.x>80){
        score = score - 200;
        Bola = null;
        
      }
      else if(Bola.body.position.x<240 && Bola.body.position.x>160){
        score = score + 500;
        Bola = null;
        
      }
      else if(Bola.body.position.x<320 && Bola.body.position.x>240){
        score = score + 100;
        Bola = null;
        
      }
      else if(Bola.body.position.x<400 && Bola.body.position.x>320){
        score = score -50 ;
        Bola = null;
        
      }
      else if(Bola.body.position.x<480 && Bola.body.position.x>400){
        score = score + 1000;
        Bola = null;
        
      }
      else if(Bola.body.position.x<560 && Bola.body.position.x>480){
        score = score + 50;
        Bola = null;
        
      }
      else if(Bola.body.position.x<640 && Bola.body.position.x>560){
        score = score + 100;
        Bola = null;
        
      }
      else if(Bola.body.position.x<720 && Bola.body.position.x>640){
        score = score + 200;
        Bola = null;
        
      }
      else if(Bola.body.position.x<800 && Bola.body.position.x>720){
        score = score - 200;
        Bola = null;
        
      }
    }
  }
}