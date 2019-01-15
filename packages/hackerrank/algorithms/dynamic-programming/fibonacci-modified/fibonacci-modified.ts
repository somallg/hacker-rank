/**
 * HackerRank - FibonacciModified
 */

// tslint:disable-next-line
import { BigNumber } from 'bignumber.js';

function solveFibonacciModified(t1: number, t2: number, n: number): string {
  const dp: BigNumber[] = [new BigNumber(t1), new BigNumber(t2)];

  for (let i: number = 2; i < n; i = i + 1) {
    dp[i] = dp[i - 2].plus(dp[i - 1].exponentiatedBy(2));
  }

  return dp[n - 1].toFixed();
}

export { solveFibonacciModified };
