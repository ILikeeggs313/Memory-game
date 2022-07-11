const gameContainer = document.getElementById("game");
let card1 = null;
let card2 = null;
let cardsFlipped = 0;
let noClicking;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];



// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  if (noClicking = false) return;
  if (event.target.classList.contains("flipped")) return;
  // you can use event.target to see which element was clicked
  // console.log("you just clicked", event.target);
  //we use event.target.classList[0] to access elements of the COLORS.
  let flippedCards = event.target;
  flippedCards.style.backgroundColor = flippedCards.classList[0];

  if(!card1 || !card2) {
    card1 = card1 || flippedCards;
    card2 = flippedCards === card1 ? null : flippedCards;

  }
  if(card1 && card2){
    noClicking = true;
    if(card1.className === card2.className){
      cardsFlipped += 2;
      card1.removeEventListener("flipped", handleCardClick);
      card2.removeEventListener("flipped", handleCardClick);
      card1 = null;
      card2 = null;
      noClicking = false;
    
    }
    else {
      setTimeout(function(){
        card1.style.backgroundColor = "";
        card2.style.backgroundColor = "";
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1 = null;
        card2 = null;
        noClicking = false;
      }, 1000);

    }
  }
if(cardsFlipped === COLORS.length) alert ("Game's over");
}

// when the DOM loads
createDivsForColors(shuffledColors);

//start the game!
const selectors = {
  boardContainer: document.querySelector('.board-container'),
  board: document.querySelector('.board'),
  moves: document.querySelector('.moves'),
  timer: document.querySelector('.timer'),
  start: document.querySelector('button'),
  win: document.querySelector('.win')
}
const stateOfGame = {
  gameStarted: false,
  cardsFlipped: 0,
  totalFlips: 0,
  totalTime: 0,
  loop: null
};
let boardMaker = () => {
  const dimensions = selectors.board.getAttribute('data-dimension')
  if (dimensions % 2 !== 0){
    throw new Error ('the dimension must be an even number');
  }}