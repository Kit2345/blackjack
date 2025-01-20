//Function to add one card to selected hand
export function addCard(deck) {
    // get random card
    const randomIndex = Math.floor(Math.random() * Object.keys(deck).length);
    const cardKey = Object.keys(deck)[randomIndex];
    return cardKey;
  }

  export function pushCard(user, deck) {
    let new_card = addCard(deck);
    console.log("new card:", new_card);
    user.hand.push(new_card);
    let total = calculateHandTotal(user.hand, deck);
    console.log("hand is:", user.hand, "total is:", total);
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