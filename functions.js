// export default function calculateHandTotal(hand, deck) {
//     let ace_count = 0;
//     let hand_total = 0;
//     // let status_bust = false
//     for (let i = 0; i < hand.length; i++) {
//       if (hand[i] == "Ace") {
//         ace_count++;
//       }
//       hand_total += deck[hand[i]];
  
//       if (ace_count > 0) {
//         if (hand_total + 10 <= 21) {
//           hand_total = hand_total + 10;
//         }
//       }
//     }
//     return hand_total;
//   }