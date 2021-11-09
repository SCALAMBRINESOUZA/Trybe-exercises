function getChange(payable, paid) {
    const coins = [200, 100, 50, 20, 10, 5, 2, 1];
    const change = [];
    const { length } = coins;
    let remaining = paid - payable; // we reduce this below
  
    if (paid < payable) throw new Error('paid value is not enough');
  
    for (let index = 0; index < length; index += 1) { // loop through array of notes & coins:
      const coin = coins[index];
      const timesCoinFits = Math.floor(remaining / coin); // no partial coins
  
      if (timesCoinFits >= 1) { // check coin fits into the remaining amount
        for (let j = 0; j < timesCoinFits; j += 1) { // add coin to change x times
          change.push(coin);
          remaining -= coin; // subtract coin from remaining
        }
      }
    }
    return change;
  }
    getChange(200, 300);

  module.exports = getChange;