/**
 * Coins
 */

function makeChange(n: number): number {
  return makeChangeRec(n, [25, 10, 5, 1], 0, new Map());
}

function makeChangeRec(amount: number, coins: number[], index: number, map: Map<string, number>): number {
  if (map.has([amount, index].join(','))) {
    return map.get([amount, index].join(',')) || 0;
  }

  if (index >= coins.length - 1) {
    // last coin is 1 so we can always sum up to amount using 1 cent
    return 1;
  }

  let ways: number = 0;
  const coinValue: number = coins[index];

  for (let coinAmount: number = 0; coinAmount * coinValue <= amount; coinAmount += 1) {
    const amountRemaining: number = amount - coinAmount * coinValue;
    ways += makeChangeRec(amountRemaining, coins, index + 1, map);
  }

  map.set([amount, index].join(','), ways);

  return ways;
}

export { makeChange };
