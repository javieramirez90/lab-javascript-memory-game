let MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  let copyCards = this.cards;
  let newContainer = [];

  while(copyCards.length > 0){
    let indexSelection = Math.floor(Math.random() * copyCards.length);
    let extracted = copyCards.splice(indexSelection, 1);
    newContainer.push(extracted[0]);
  }
  this.cards = newContainer;
  // return newContainer;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
}

MemoryGame.prototype.isFinished = function () {
};