/**
 * SortedPermutationRankWithRepeats
 */

const UPPER_BOUND: number = 10e5 + 3;

function getCharAndOccur(s: string): {} {
  const result: {} = {};

  s.split('').forEach((char: string) => {
    result[char] = (result[char] === undefined ? 0 : result[char]) + 1;
  });

  return result;
}

function computeFactorial(n: number): number[] {
  const result: number[] = [];
  result[0] = result[1] = 1;
  result[2] = 2;

  for (let i: number = 3; i <= n; i = i + 1) {
    result[i] = i * result[i - 1];
  }

  return result;
}

function sortedPermutationRankWithRepeats(s: string): number {
  let res: number = 1;

  const charOccur: {} = getCharAndOccur(s);
  const factorial: number[] = computeFactorial(s.length - 1);

  for (let i: number = 0; i < s.length - 1; i = i + 1) {
    let rank: number = 0;
    for (let j: number = i + 1; j < s.length; j = j + 1) {
      if (s.charCodeAt(j) < s.charCodeAt(i)) {
        rank = rank + 1;
      }
    }
    let temp: number = factorial[s.length - i - 1];
    for (const key of Object.keys(charOccur)) {
      temp = temp / factorial[Math.max(0, charOccur[key])];
    }
    // temp1 = Math.pow(temp1, UPPER_BOUND - 2) % UPPER_BOUND;
    res = (res + ((rank * temp) % UPPER_BOUND)) % UPPER_BOUND;
    charOccur[s[i]] = charOccur[s[i]] - 1;
  }

  return res;
}

export { sortedPermutationRankWithRepeats };
