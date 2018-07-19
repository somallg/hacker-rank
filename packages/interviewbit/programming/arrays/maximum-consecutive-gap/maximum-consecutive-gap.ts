/**
 * Interviewbit - MaximumConsecutiveGap
 */

function maximumConsecutiveGap(array: number[]): number {
  const l = array.length;
  if (l < 2) {
    return 0;
  }

  const max = array.reduce((acc, e) => Math.max(acc, e));
  const min = array.reduce((acc, e) => Math.min(acc, e));
  const gap = (max - min) / (l - 1);

  if (gap === 0) {
    // array contains same element
    return 0;
  }

  let buckets: number[][] = Array(l).fill([]);

  for (let i = 0; i < l; i = i + 1) {
    const e = array[i];
    const bucketIndex = Math.floor((e - min) / gap);

    const [bucketMin = e, bucketMax = e] = buckets[bucketIndex];

    buckets[bucketIndex] = [Math.min(bucketMin, e), Math.max(bucketMax, e)];
  }

  buckets = buckets.filter(b => b.length > 0);
  let result = 0;

  for (let i = 1; i < buckets.length; i = i + 1) {
    const [bucketMin] = buckets[i];
    const [, previousBucketMax] = buckets[i - 1];

    result = Math.max(result, bucketMin - previousBucketMax);
  }

  return result;
}

export { maximumConsecutiveGap };
