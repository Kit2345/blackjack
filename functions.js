//Function to add one card to selected hand
export function addCard(deck) {
  // get random card
  const randomIndex = Math.floor(Math.random() * Object.keys(deck).length);
  const cardKey = Object.keys(deck)[randomIndex];
  return cardKey;
}

export function pushCard(user, deck) {
  let new_card = addCard(deck);
  // console.log("new card:", new_card);
  user.hand.push(new_card);
  let total = calculateHandTotal(user.hand, deck);
  user.handValue = total;
  // console.log("hand is:", user.hand, "total is:", total);
}
// function calculate hand total
// Input: Hand which will be an array
// Method: Iterate through hand, add scores for non-aces, then deal with any aces
// Output: Total of hand

export function calculateHandTotal(hand, deck) {
  let ace_count = 0;
  let hand_total = 0;
  // let status_bust = false
  for (let i = 0; i < hand.length; i++) {
    if (hand[i] == "Ace") {
      ace_count++;
    }
    hand_total += deck[hand[i]];
  }
  if (ace_count > 0) {
    if (hand_total + 10 <= 21) {
      hand_total = hand_total + 10;
    }
  }
  return hand_total;
}

export function resetGame(gamestats, player, computer) {
  // return user = { hand: [], handValue: 0 };
  resetHand(player, computer);
  gamestats.playerScore = 0;
  gamestats.computerScore = 0;
}

export function resetHand(player, computer) {
  player.hand.splice(0, player.hand.length);
  player.handValue = 0;
  computer.hand.splice(0, computer.hand.length);
  computer.handValue = 0;
}

// Function that deals a new game
export function dealNewGame(player, computer, deck) {
  pushCard(player, deck);
  pushCard(player, deck);
  pushCard(computer, deck);
  pushCard(computer, deck);
}

export function result(player, computer, score) {
  let result = "";
  if (player.handValue > 21) {
    score.computerScore++;
    result = "You have bust. Player lose";
  } else if (computer.handValue > 21) {
    score.playerScore++;
    result = "Computer has bust. Player win";
  } else if (computer.handValue > player.handValue) {
    score.computerScore++;
    result = "Computer Wins";
  } else if (computer.handValue < player.handValue) {
    score.playerScore++;
    result = "Player Wins";
  } else {
    score.computerScore++;
    result = "Tie goes to the House. Computer Wins";
  }
  return `Player hand: ${player.hand}, player total: ${player.handValue}. Computer hand: ${computer.hand}, computer total: ${computer.handValue}. ${result} Player: ${score.playerScore} Computer: ${score.computerScore}`;
}

// Function to ask player what they want to do:
// Pop up box needs to tell user: current hand, handvalue,
// Ask whether to draw or stick.
// While loop -> draw = continue loop
//            -> bust = break loop
//            -> stick = break loop

// While loop:

// Confirm box:
// window.confirm("Do you want to draw?");
// Ask player whether they want to draw?

export function drawOption(player, deck) {
  while (true) {
    if (
      player.handValue <= 21 &&
      player.hand.length < 5 &&
      window.confirm(
        `Your current hand is: ${player.hand}, and total is: ${player.handValue}. Would you like to draw another card?`
      )
    ) {
      pushCard(player, deck);
      console.log(player.hand);
    } else if (player.handValue > 21) {
      alert(`Your total is ${player.handValue}. You have bust.`);
      break;
    } else {
      break;
    }
  }
}

// Function for computer
export function computerTurn(computer, deck) {
  while (computer.handValue < 17 && computer.hand.length < 5) {
    pushCard(computer, deck);
  }
}

export function playGame(deck, player, computer, gameStats) {
  dealNewGame(player, computer, deck);
  drawOption(player, deck);
  computerTurn(computer, deck);
  alert(result(player, computer, gameStats));
  resetHand(player, computer);
}
