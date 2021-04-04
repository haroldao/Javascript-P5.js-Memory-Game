let faceUpCards = []
    deck = []
    cards = []
    faceDownCard = []

const rows = 3
      columns = 6

class Card {
  constructor(x, y, faceUpImage){
    this.x = x
    this.y = y
    this.width = 200
    this.height = 200
    this.faceUpImage = faceUpImage
    this.faceDownImage = faceDownCard
    this.isFaceUp = true
  }

  render(){
    fill(255, 255, 255)
    // stroke(0, 0, 0)
    // strokeWeight(4)
    rect(this.x, this.y, this.width, this.height, 20)

    if(this.isFaceUp){
      image(this.faceUpImage, this.x, this.y, this.width, this.height)
    }
    else{
      image(this.faceDownImage, this.x + 40, this.y + 40, 40, 40)
    }
    
  }
}

function loadFaceUpCards(){
  faceUpCards= [
    loadImage("assets/Card.png"),
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

  //shuffle cards
  deck.sort(function(){
    return 0.5 - random()
  })
}

function createCards(){
  for(let i=0; i < columns; i++){
    for(let j=0; j < rows; j++){
      //image
      let card = new Card(
        i * 280 + 40,
        j * 280 + 40,
        deck.pop()
      )
      cards.push(card)
    }
  }
}

function setup (){
  createCanvas(2000, 2000);
  // window.addEventListener("resize", ()=>{
  //   createCanvas(window.innerWidth, window.innerHeight);
  //   console.log("resize");
  // })
  faceDownCard = loadImage("assets/Back_star.png")

  loadFaceUpCards();
  createDeck(faceUpCards);
  createCards()
}

function draw(){
  // background(220);
  for(let i = 0; i < cards.length; i++){
    cards[i].render()
  }

}