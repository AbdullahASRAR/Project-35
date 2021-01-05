var dog,dogHappy;
var foodStock;
var dataBase;
var foodS;
function preload()
{
  dog=loadImage("images/dogImg.png");
  dogHappy=loadImage("images/dogImg1.png");
}
function setup() {
	createCanvas(800, 700);
  dataBase=firebase.database();
  foodStock=dataBase.ref('Food');
  foodStock.on("value",readStock);
  Dog=createSprite(400,350);
  Dog.addImage(dog);
  Dog.scale=0.5;
}
function draw() { 
  background("blue");
  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    Dog.addImage(dogHappy);
}
if(foodS<=0){
  Dog.addImage(dog);
  text("No Food Remaining",350,180);
}
textSize(20)
text("Note:Press UP_ARROW Key To Feed Drago Milk",250,50);
text("Food Remaining:"+foodS,350,150);
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
  
  dataBase.ref('/').update({
      Food:x
    })
  }
}

