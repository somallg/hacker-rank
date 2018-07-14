/**
 * Leetcode - MaximumSubarray bottom up version
 */

// function maximumSubarrayRec(array: number[], i: number): number[] {
//   if (i < 0) {
//     return [];
//   }

//   if (i === 0) {
//     return [array[0]];
//   }

//   const maxSubarray = maximumSubarrayRec(array, i - 1);
//   const lastMax = maxSubarray[maxSubarray.length - 1];

//   maxSubarray.push(Math.max(lastMax + array[i], array[i]));

//   return maxSubarray;
// }

// function maximumSubarray(array: number[]): number {
//   if (array.length === 0) {
//     return 0;
//   }

//   return maximumSubarrayRec(array, array.length - 1).reduce((acc, a) =>
//     Math.max(acc, a)
//   );
// }

function maximumSubarray(array: number[]): number {
  if (array.length === 0) {
    return 0;
  }

  const dp: number[] = [array[0]];

  for (let i = 1; i < array.length; i = i + 1) {
    dp[i] = Math.max(dp[i - 1] + array[i], array[i]);
  }

  return dp.reduce((acc, e) => Math.max(acc, e));
}

export { maximumSubarray };
