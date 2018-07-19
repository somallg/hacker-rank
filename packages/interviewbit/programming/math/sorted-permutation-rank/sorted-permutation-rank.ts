/**
 * SortedPermutationRank
 */
function numberOfCharLessThan(index: number, s: string) {
  let result = 0;
  for (let i = index + 1; i < s.length; i = i + 1) {
    if (s.charCodeAt(i) < s.charCodeAt(index)) {
      result = result + 1;
    }
  }

  return result;
}

const UPPER_BOUND = 10e5 + 3;

function sortedPermutationRank(s: string): number {
  const l = s.length;

  const dp: number[] = Array(l).fill(1);
  dp[2] = 2;
  for (let i = 3; i <= l - 1; i = i + 1) {
    dp[i] = ((i * dp[i - 1]) % UPPER_BOUND) % UPPER_BOUND;
  }

  let rank = 0;
  for (let i = 0; i < l; i = i + 1) {
    const nbLessThan = numberOfCharLessThan(i, s);
    rank = rank + ((nbLessThan * dp[l - i - 1]) % UPPER_BOUND);
  }

  return (rank + 1) % UPPER_BOUND;
}

export { sortedPermutationRank };
