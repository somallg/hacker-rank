/**
 * HackerRank - CoinChange bottom up version
 */

function solveCoinChange(n: number, coins: number[]): number {
  const dp: number[][] = [];
  for (let i: number = 0; i < coins.length; i = i + 1) {
    dp[i] = [1].concat(Array(n + 1).fill(0));
  }

  for (let j: number = 1; j <= n; j = j + 1) {
    dp[0][j] = j % coins[0] === 0 ? 1 : 0;
  }

  for (let i: number = 1; i < coins.length; i = i + 1) {
    for (let j: number = 1; j <= n; j = j + 1) {
      const currentCoin: number = coins[i];
      if (currentCoin <= j) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - currentCoin];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[coins.length - 1][n];
}

export { solveCoinChange };
