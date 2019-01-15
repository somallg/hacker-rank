/**
 * Interviewbit - MaximumConsecutiveGap
 */

function maximumConsecutiveGap(array: number[]): number {
  const l: number = array.length;
  if (l < 2) {
    return 0;
  }

  const max: number = array.reduce((acc: number, e: number) =>
    Math.max(acc, e)
  );
  const min: number = array.reduce((acc: number, e: number) =>
    Math.min(acc, e)
  );
  const gap: number = (max - min) / (l - 1);

  if (gap === 0) {
    // array contains same element
    return 0;
  }

  let buckets: number[][] = Array(l).fill([]);

  for (let i: number = 0; i < l; i = i + 1) {
    const e: number = array[i];
    const bucketIndex: number = Math.floor((e - min) / gap);

    const [bucketMin = e, bucketMax = e]: number[] = buckets[bucketIndex];

    buckets[bucketIndex] = [Math.min(bucketMin, e), Math.max(bucketMax, e)];
  }

  buckets = buckets.filter((b: number[]) => b.length > 0);
  let result: number = 0;

  for (let i: number = 1; i < buckets.length; i = i + 1) {
    const [bucketMin]: number[] = buckets[i];
    const [, previousBucketMax]: number[] = buckets[i - 1];

    result = Math.max(result, bucketMin - previousBucketMax);
  }

  return result;
}

export { maximumConsecutiveGap };
