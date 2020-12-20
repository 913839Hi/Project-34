var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
pup=loadImage("images/dogImg.png")
happyDog=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  Dog=createSprite(250,250,50,50);
 Dog.addImage(pup);
 Dog.scale=0.1;
  
database=firebase.database();

foodStock=database.ref('Food');
foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
 
if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
   Dog.addImage(happyDog);
}

if(keyWentUp(UP_ARROW)){
  Dog.addImage(pup);
}
    textSize(18);
    fill ("red");
    text ("Press Up Arrow to feed dog!",50,50);
    stroke (5);
text ("Food: " + foodS,400,50);
    
    drawSprites();

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }  
  database.ref('/').update({
    Food:x
  })
}
