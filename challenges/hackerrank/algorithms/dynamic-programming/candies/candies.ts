/**
 * HackerRank - Candies
 */

function solveCandies(ratings: number[]): number {
  const n = ratings.length;

  debugger;

  const inc: number[] = [1];

  for (let i = 1; i < n; i = i + 1) {
    inc[i] = ratings[i] > ratings[i - 1] ? inc[i - 1] + 1 : inc[i - 1] - 1;
  }

  const dec: number[] = [];
  dec[n - 1] = 1;
  for (let i = n - 2; i >= 0; i = i - 1) {
    dec[i] = ratings[i] > ratings[i + 1] ? dec[i + 1] + 1 : dec[i + 1] - 1;
  }

  const dp: number[] = [ratings[1] > ratings[0] ? inc[0] : dec[0]];
  for (let i = 1; i < n; i = i + 1) {
    if (inc[i] <= 0) {
      dp[i] = dec[i];
    } else if (dec[i] <= 0) {
      dp[i] = inc[i];
    } else {
      dp[i] = ratings[i] > ratings[0] ? inc[i] : dec[i];
    }
  }

  return dp.reduce((acc, i) => acc + i);
}

export { solveCandies };
