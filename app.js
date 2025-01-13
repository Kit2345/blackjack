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

// function calculate hand total
// Input: Hand which will be an array
// Method: Iterate through hand, add scores for non-aces, then deal with any aces
// Output: Total of hand

function calculateHandTotal(hand) {
  let ace_count = 0;
  let hand_total = 0;
  // let status_bust = false
  for (let i = 0; i < hand.length; i++) {
    if (hand[i] == "Ace") {
      ace_count++;
    }
    hand_total += deck[hand[i]];

    if (ace_count > 0) {
      if (hand_total + 10 <= 21) {
        hand_total = hand_total + 10;
      }
    }
  }
  return hand_total;
}

// Test: check calculateHandTotal function works (should total 15)
let hand = ["Five", "Ten", "Ace"];
console.log(calculateHandTotal(hand));

hand = ["Ten", "Ace"];
console.log(calculateHandTotal(hand));
