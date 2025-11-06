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

class Card {
  constructor (rank, suit, value) {
    this.rank = rank;
    this.suit = suit;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.ranks = [
      "Two of",
      "Three of",
      "Four of",
      "Five of",
      "Six of",
      "Seven of",
      "Eight of",
      "Nine of",
      "Ten of",
      "Jack of",
      "Queen of",
      "King of",
      "Ace of"
    ];
    this.suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    this.createDeck();
  }

  createDeck() {
    for (let suit of this.suits) {
      for (let i = 0; i < this.ranks.length; i++) {
        const card = new Card(this.ranks[i], suit, i + 2);
        this.cards.push(card);
      }
    }
    console.log(this.cards);
  }


//Complete the Fisher-Yates shuffle algorithm
  shuffle() {
  for (let i = this.cards.length - 1; i > 0; i--) {
      const cardsInDeck = this.cards.length;
      const random = Math.floor(Math.random() * (cardsInDeck - 1));
      const removedCard = this.cards.splice(random, 1);
      this.cards.push(removedCard[0]);
    }
  }
  

  deal() {
    const half = Math.floor(this.cards.length / 2);
    return [
      this.cards.slice(0, half),
      this.cards.slice(half)
    ];
  }
}


//Player class - represents a player in the game
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.score = 0;
  }

  receiveCards(cards) {
    this.hand = cards;
  }

  playCard() {
    return this.hand.shift();
  }

  addPoint() {
    this.score++;
  }

  getScore() {
    return this.score;
  }
}

// Game class - manages the game flow and logic
class Game {
  constructor() {
    this.deck = new Deck();
    this.player1 = new Player("Player 1");
    this.player2 = new Player("Player 2");
  }

  play() {
    this.deck.shuffle();
    const [hand1, hand2] = this.deck.deal();
    this.player1.receiveCards(hand1);
    this.player2.receiveCards(hand2);

    console.log(this.deck);

    console.log("WAR Card Game Started!");
    // Play all 26 rounds
    for (let i = 0; i < 26; i++) {
      console.log(`--- Round ${i + 1} ---`);

      const card1 = this.player1.playCard();
      const card2 = this.player2.playCard();

      console.log(`${this.player1.name} plays: ${card1.rank} ${card1.suit} (value: ${card1.value})`);
      console.log(`${this.player2.name} plays: ${card2.rank} ${card2.suit} (value: ${card2.value})`);
      
      if (card1.value > card2.value) {
        this.player1.addPoint();
        console.log("Player 1 wins a point!")
      } else if (card1.value < card2.value) {
        this.player2.addPoint();
        console.log("Player 2 wins a point!");
      } else {
        console.log("It's a tie - no points awarded");
      }
    }
    this.endGame();
  }


  endGame() {
    console.log("=".repeat(40));
    console.log("GAME OVER!");
    console.log("=".repeat(40));
    //Display both players' final scores
    console.log(`${this.player1.name}'s final score is ${this.player1.score}`);
    console.log(`${this.player2.name}'s final score is ${this.player2.score}`)

    console.log("=".repeat(40));
    //Compare scores and announce the winner
    if (this.player1.score > this.player2.score) {
        console.log("Player 1 wins the game!")
      } else if (this.player1.score < this.player2.score) {
        console.log("Player 2 wins the game!")
      }
  }
}

//Create and start a new game
const game = new Game();
game.play();

