import {
  addCard,
  pushCard,
  calculateHandTotal,
  resetGame,
  dealNewGame,
  result,
  drawOption,
} from "./functions.js";

let deck = {
  Ace: 1,
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
  Seven: 7,
  Eight: 8,
  Nine: 9,
  Ten: 10,
  Jack: 10,
  Queen: 10,
  King: 10,
};

let gameStats = [];
let player = { hand: [], handValue: 0 };
let computer = { hand: [], handValue: 0 };

// Test: check calculateHandTotal function works (should total 15)
// let hand = ["Five", "Ten", "Ace"];
// console.log(calculateHandTotal(hand));

// hand = ["Ten", "Ace"];
// console.log(calculateHandTotal(hand));

// Test add card function:
// console.log(addCard(deck));

// // // Test pushCard function:
// console.log("adding three cards to player");
// pushCard(player, deck);
// pushCard(player, deck);
// pushCard(player, deck);

// // console.log("adding one card to computer");
// pushCard(computer, deck);

// // Check if totals make sense, if ace added first.
// player.hand = ["Ace", "King"];
// pushCard(player, deck);

// Reset Hands
resetGame(gameStats, player, computer);
// console.log(player);

// Deal new game
dealNewGame(player, computer, deck);
console.log(player);
console.log(computer);

console.log(result(player, computer));

// MVP 2.0
drawOption(player, deck);
