/**
 * HackerRank - CoinChange top down recursive version
 */

type CoinChangeFunction = (
  currentIndex: number,
  changeFor: number,
  coins: number[]
) => number;

function memorized(fn: Function): CoinChangeFunction {
  const memo: number[][] = [];

  return (currentIndex: number, changeFor: number, coins: number[]): number => {
    if (memo[currentIndex] === undefined) {
      memo[currentIndex] = [];
    }

    let cachedValue: number = memo[currentIndex][changeFor];

    if (cachedValue === undefined) {
      cachedValue = fn(currentIndex, changeFor, coins);
      memo[currentIndex][changeFor] = cachedValue;
    }

    return cachedValue;
  };
}

function solveCoinChangeRec(n: number, coins: number[]): number {
  const solveCoinChangeMemo: CoinChangeFunction = memorized(
    // tslint:disable-next-line
    (currentIndex: number, changeFor: number, coins: number[]) => {
      if (changeFor < 0 || currentIndex < 0) {
        return 0;
      }

      if (changeFor === 0) {
        return 1;
      }

      const currentCoin: number = coins[currentIndex];

      return currentCoin <= changeFor
        ? solveCoinChangeMemo(currentIndex - 1, changeFor, coins) +
            solveCoinChangeMemo(currentIndex, changeFor - currentCoin, coins)
        : solveCoinChangeMemo(currentIndex - 1, changeFor, coins);
    }
  );

  return solveCoinChangeMemo(coins.length - 1, n, coins);
}

export { solveCoinChangeRec };
