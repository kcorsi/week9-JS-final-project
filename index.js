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

class Game {
  constructor() {
    this.deck = [];
    this.shuffledDeck = [];
    this.ranks = [
      "Ace of",
      "King of",
      "Queen of",
      "Jack of",
      "Ten of",
      "Nine of",
      "Eight of",
      "Seven of",
      "Six of",
      "Five of",
      "Four of",
      "Three of",
      "Two of",
    ];
    this.suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

    this.player1 = {
      name: "Player1",
      score: 0,
      hand: [],
    };

    this.player2 = {
      name: "Player2",
      score: 0,
      hand: [],
    };
  }

  makeDeck() {
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.ranks.length; j++) {
        const card = {
          name: `${this.ranks[j]} ${this.suits[i]}`,
          value: j + 1,
        };
        this.deck.push(card);
      }
    }
  }

  shuffleDeck() {
    for (let i = 0; i < 52; i++) {
      const cardsInDeck = this.deck.length;
      const random = Math.floor(Math.random() * (cardsInDeck - 1));
      const removedCard = this.deck.splice(random, 1);
      this.shuffledDeck.push(removedCard[0]);
    }
  }

  playGame() {
    game.player1.hand = game.shuffledDeck.slice(0, 26);
    game.player2.hand = game.shuffledDeck.slice(26, 53);

    for (let i = 0; i < 26; i++) {
      const player1Card = this.player1.hand.shift();
      const player2Card = this.player2.hand.shift();
      
      if (player1Card.value < player2Card.value) {
        this.player1.score++;
        console.log("Player 2 wins a point");
      } else if (player1Card.value === player2Card.value) {
        console.log("No point- it was a tie");
      } else {
        this.player2.score++;
        console.log("Player 1 wins a point");
      }
    }
  }
 
  endGame() {
    if (this.player1.score > this.player2.score) {
      console.log("Player 1 wins the game!");
    } else if (this.player1.score < this.player2.score) {
      console.log("Player 2 wins the game!");
    } else {
      console.log("The game is a tie!");
    }
    console.log(
      "FINAL SCORE: ",
      "Player 1 scored " + this.player1.score,
      ": Player 2 scored " + this.player2.score
    );
  }
}  

const game = new Game();
game.makeDeck();
game.shuffleDeck();
game.playGame();
game.endGame();