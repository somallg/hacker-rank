/**
 */

function solveMaxProfit(stockPrices: number[]): number {
  // 23171, 21011, 21123, 21366, 21013, 21367
  let minPrice: number = Infinity;
  let maxProfit: number = 0;

  stockPrices.forEach((stockPrice: number) => {
    minPrice = Math.min(minPrice, stockPrice);
    maxProfit = Math.max(maxProfit, stockPrice - minPrice);
  });

  return maxProfit;
}

export { solveMaxProfit };
