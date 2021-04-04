let faceUpCards = []
let deck = []


class Card{
  constructor(faceUpImage, x, y){
    this.x = x
    this.y = y
    this.width = 250
    this.faceUpImage = faceUpImage
  }
}

function loadFaceUpCards(){
  faceUpCards= [
    loadImage("assets/Card-1.png"),
    loadImage("assets/Card-2.png"),
    loadImage("assets/Card-3.png"),
    loadImage("assets/Card-4.png"),
    loadImage("assets/Card-5.png"),
    loadImage("assets/Card-6.png"),
    loadImage("assets/Card-7.png"),
    loadImage("assets/Card-8.png"),
    loadImage("assets/Card-9.png"),
    loadImage("assets/Card-10.png"),
    loadImage("assets/Card-11.png"),
    loadImage("assets/Card-12.png"),
    loadImage("assets/Card-13.png"),
    loadImage("assets/Card-14.png"),
    loadImage("assets/Card-15.png"),
    loadImage("assets/Card-16.png"),
    loadImage("assets/Card-17.png")
  ]
}

function createDeck(images){
  for(let i = 0; i < faceUpCards.length; i++){
    deck.push(images[i])
    deck.push(images[i]) //We want 2 cards.. so we duplicate
  }
}

function setup (){
  window.addEventListener("resize", ()=>{
    createCanvas(window.innerWidth, window.innerHeight);
    console.log("resize");
  })
  loadFaceUpCards();
  createDeck(faceUpCards);
}

function draw(){
  background(220);
}