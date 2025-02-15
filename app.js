import { resetGame, playGame, updateScoreText } from "./functions.js";

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

// // MVP 3.0
function startGame(deck, player, computer, gameStats) {
  resetGame(gameStats, player, computer);
  playGame(deck, player, computer, gameStats);

  while (true) {
    if (window.confirm("Do you want to play another game?")) {
      playGame(deck, player, computer, gameStats);
    } else {
      break;
    }
  }
}

const game_start_button = document.getElementById("game-start-button");
console.log(game_start_button);
game_start_button.addEventListener("click", () => {
  startGame(deck, player, computer, gameStats);
});
