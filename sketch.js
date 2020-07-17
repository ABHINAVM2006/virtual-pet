//Create variables here
var dog, happyDog, database, foods, foodStock; 
var dogImg, happyDogImg;

function preload()  {  
  //load images here
  dogImg = loadImage('images/dogImg.png');
  happyDogImg = loadImage('images/dogImg1.png');
  
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();   
  dog = createSprite(250, 300, 150, 150);
  dog.addImage(dogImg);
  dog.scale = 0.15;   
  database.ref('food').on('value', function(data){
    foodStock = data.val();
  })
  console.log(foodStock);
}


function draw() {
  background(250);
  text(mouseX + "," + mouseY, 10, 10);
  if(keyWentDown(UP_ARROW)) {
    console.log("insideIf");
    dog.addImage(happyDogImg);
    writeStock(foodStock);
  }
  fill(255,255,254); stroke("black");
   text("Food remaining : "+foodStock,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
  drawSprites();
  //add styles here

}

function writeStock(x) {
 if(x <= 0) {
   x = 0;
 }
 else{
   x = x-1;
 }
 database.ref('/').update({
   food:x
 })
}



