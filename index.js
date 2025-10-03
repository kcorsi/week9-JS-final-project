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
  constructor(cards) {
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
        let card = {
          name: `${this.ranks[j]} ${this.suits[i]}`,
          value: j + 1,
        };
        this.deck.push(card);
        console.log(deck);
      }
    }
  }

  shuffleDeck() {
    for (let i = 0; i < 52; i++) {
      const cardsInDeck = this.deck.length;
      let random = Math.floor(Math.random() * (cardsInDeck - 1));
      const removedCard = this.deck.splice(random, 1);
      this.shuffledDeck.push(removedCard[0]);
      console.log(cardsInDeck);
    }
  }

  playGame() {
    let i = 1;

    const game = new Game();
    game.makeDeck();
    game.shuffleDeck();

    console.log(this.shuffledDeck);

    game.player1.hand = game.shuffledDeck.slice(0, 26);
    console.log(this.player1.hand);
    game.player2.hand = game.shuffledDeck.slice(26, 53);
    console.log(this.player2.hand);

    // while (i < 27) {
    for (let i = 0; i < 27; i++) {
      const player1Card = this.player1.hand.shift();
      const player2Card = this.player2.hand.shift();
      if (player1Card.value < player2Card.value) {
        this.player1.score++;
        console.log("Player 2 wins a point");
      } else if ((player1Card.value = player2Card.value)) {
        this.player1.score = 0;
        console.log("No point- it was a tie");
      } else player1Card.value > player2Card.value;
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
    console.log("The game is a tie!")
  }
}

//create an end game method in our class that determines the winner and logs it out, then call this end game method to run it

//   startGame (){
//     const deck = new Deck();
//     deck.shuffleDeck();

//     const deckMidpoint = Math.ceil(deck.shuffledDeck / 2);
//     player1Deck = new Deck(deck.cards.slice(0, deckMidpoint));
//     player2Deck = new Deck(deck.cards.slice(deckMidpoint, deck.shuffledDeck));

//     const player1Points = 0;
//     const player2Points = 0;

//     const gameRounds = 26;

//     for (let i = 0; i < gameRounds; i++) {
//       const player1Card = player1Deck.cards[i].value;
//       const player2Card = player2Deck.cards[i].value;
//       if (Object.values(player1Card)[0] > Object.values(player2Card)[0]) {
//       console.log(`Player 1 wins round ${i+1}`);
//       player1Points++;
//       } else if (Object.values(player1Card)[0] < Object.values(player2Card)[0]) {
//       console.log(`Player 2 wins round ${i+1}`);
//       player2Points++;
//       } else {
//       console.log(`Round ${i+1} is a tie`);
//     }
//     }
//   }
//   // I need to create a way to show the value of the cards after they are shuffled and moved into each player's hand in order to compare values and assign a point to each player
//   console.log("Player 1 Points" + player1Points);
//   console.log("Player 2 Points" + player2Points);
//   if (player1Points > player2Points) {
//     console.log("Player 1 wins the game!");
//   } else if (player1Points < player2Points) {
//     console.log("Player 2 wins the game!");
//   } else {
//     console.log("The game is a tie!");
//   }
// }

//   // playGame() {
//   // const deck = new Deck
//   // deck.makeDeck()
//   // deck.shuffleDeck()
//   //         const i = 0;
//   //         while (deck.shuffledDeck.length i == 0) {
//   //         this.player1.hand.push(deck.shuffledDeck.slice)(0, halfDeck)
//   //         this.player2.hand.push(deck.shuffledDeck.slice)(halfDeck, deck.shuffledDeck.length)}
//   //         console.log(this.player1.hand)
//   //         console.log(this.player2.hand)
//   //         }
//   //       }
//   // }

