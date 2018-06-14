/**
 * HackerRank - CoinChange
 */

// type CoinChangeFunction = (
//   currentIndex: number,
//   changeFor: number,
//   coins: number[]
// ) => number;

// function memorized(fn: Function): CoinChangeFunction {
//   const memo: number[][] = [];

//   return (changeFor: number, currentIndex: number, coins: number[]) => {
//     if (memo[changeFor] === undefined) {
//       memo[changeFor] = [];
//     }

//     let cachedValue = memo[changeFor][currentIndex];

//     if (cachedValue === undefined) {
//       cachedValue = fn(changeFor, currentIndex, coins);
//       memo[changeFor][currentIndex] = cachedValue;
//     }
//     return cachedValue;
//   };
// }

// function solveCoinChange(n: number, coins: number[]): number {
//   const solveCoinChangeRec = memorized(
//     (changeFor: number, currentIndex: number, coins: number[]) => {
//       if (changeFor < 0 || currentIndex < 0) {
//         return 0;
//       }

//       if (changeFor === 0) {
//         return 1;
//       }

//       const currentCoin = coins[currentIndex];

//       return currentCoin <= changeFor
//         ? solveCoinChangeRec(changeFor, currentIndex - 1, coins) +
//             solveCoinChangeRec(changeFor - currentCoin, currentIndex, coins)
//         : solveCoinChangeRec(changeFor, currentIndex - 1, coins);
//     }
//   );

//   return solveCoinChangeRec(n, coins.length - 1, coins);
// }

function solveCoinChange(n: number, coins: number[]): number {
  const dp: number[][] = [];
  for (let i = 0; i < coins.length; i = i + 1) {
    dp[i] = [1].concat(Array(n + 1).fill(0));
  }

  for (let j = 1; j <= n; j = j + 1) {
    dp[0][j] = j % coins[0] === 0 ? 1 : 0;
  }

  for (let i = 1; i < coins.length; i = i + 1) {
    for (let j = 1; j <= n; j = j + 1) {
      const currentCoin = coins[i];
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
