/* Week 9 Javascript Final Project
Assignment is to create an automated version of the classic card game WAR

The game should automatically play using console.log() to display turns, points, cards used, and the outcome of the game. No user input via prompts is required.

The completed project should, when executed, do the following:
1. Deal 26 Cards to each Player from a Deck of 52 cards.
2. Iterate through the turns where each Player plays a Card.
3. The Player who played the higher card is awarded the point.
    Ties result in zero points for both Players.
4. After all Cards have been played, display the score and declare the winner.
*/

//let cardSuits = ;

//console.log(cardSuits);

//let cardRanks = ;

//console.log(cardRanks);

//let cardDeck = [];

class Deck {
  constructor (cards) {
    this.deck = [];
    this.ranks = ["Ace of", "King of", "Queen of", "Jack of", "Ten of", "Nine of", "Eight of", "Seven of", "Six of", "Five of", "Four of", "Three of", "Two of"];
    this.suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
  }

  makeDeck() {
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.ranks.length; j++) {
         let card = {
          name: `${this.ranks[j]} ${this.suits[i]}`,
          value: j + 1
        }

        this.deck.push(card);
        
        console.log(card)
        }
      }
    }
  shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j]], [this.deck[i]];
    }
  }

}

const deck = new Deck
deck.makeDeck()
deck.shuffleDeck()

console.log (deck.deck)  //This is not printing the deck correctly. Lists a lot of undefined values.


/*class Game {
  constructor () {
    this.player1 = {
      name: "Player1",
      score: 0,
      hand: []
    }
  
    this.player2 = {
      name: "Player2",
      score: 0,
      hand: []
    }
  }

    playGame () {

    const deck = new Deck
    deck.createDeck ()
    deck.shuffleDeck()

      while (deck.deck.length i == 0) {
      
      this.player1.hand.push(deck.deck.shift()}
      this.player2.hand.push(deck.deck.shift()}

      console.log(this.player1.hand)
      console.log(this.player2.hand)
      }
    }



}

const game = new Game
game.playGame()*/


//Missing game functionality because I am not sure where my errors are where the two hands of 26 cards should be printed to console.