import {
  addCard,
  pushCard,
  calculateHandTotal,
  resetGame,
  dealNewGame,
  result,
  drawOption,
  computerTurn,
  playGame,
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

let gameStats = { playerScore: 0, computerScore: 0 };
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

// console.log("adding one card to computer");
// pushCard(computer, deck);

// Check if totals make sense, if ace added first.
// player.hand = ["Ace", "King"];
// pushCard(player, deck);

// // MVP 1.0
// Reset Hands
// resetGame(gameStats, player, computer);
// console.log(player);

// // Deal new game
// dealNewGame(player, computer, deck);
// console.log(player);
// console.log(computer);

// console.log(result(player, computer));

// // MVP 2.0
// drawOption(player, deck);
// computerTurn(computer, deck);

// alert(result(player, computer, gameStats));

// // MVP 3.0
function startGame(deck, player, computer, gameStats) {
  resetGame(gameStats, player, computer);
  playGame(deck, player, computer, gameStats);
}

startGame(deck, player, computer, gameStats);

while (true) {
  if (window.confirm("Do you want to play another game?")) {
    playGame(deck, player, computer, gameStats);
  } else {
    break;
  }
}

// Function 1 (app)
// reset on page load and run function 2
// Function 2 (function)
// loop that deals, scores, stores using Function 3, deals again...
// when false (play clicks no to continue) loop breaks and score remains on screen
// when player clicks start again go back to function 1 from beginning
