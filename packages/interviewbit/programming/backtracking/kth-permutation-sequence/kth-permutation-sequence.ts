/**
 * Interviewbit - KthPermutationSequence
 * Return the kth permutation sequence of n
 * Example: n = 3, k = 4
 * Permutation sequence:
 * 1. "123"
 * 2. "132"
 * 3. "213"
 * 4. "231"
 * 5. "312"
 * 6. "321"
 * Return "231"
 */

function calculateFactorial(n: number): number[] {
  const dp: number[] = Array(n + 1).fill(1);

  for (let i: number = 2; i <= n; i = i + 1) {
    dp[i] = i * dp[i - 1];
  }

  return dp;
}

function kthPermutationSequence(n: number, k: number): string {
  const kthSequence: (k: number, numbers: number[]) => number[] = (
    // tslint:disable-next-line
    k: number,
    // tslint:disable-next-line
    numbers: number[]
  ): number[] => {
    if (numbers.length === 0) {
      return [];
    }

    const nbPermutation: number = factorials[numbers.length - 1];
    const position: number = Math.floor(k / nbPermutation);
    result.push(numbers[position]);

    numbers.splice(position, 1); // remove item at postion

    return kthSequence(k % nbPermutation, numbers);
  };

  const factorials: number[] = calculateFactorial(n);
  const numbers: number[] = Array(n)
    .fill(0)
    .map((_: number, i: number) => i + 1);
  const result: number[] = [];

  kthSequence(k - 1, numbers);

  return result.join('');
}

export { kthPermutationSequence };
