/**
 * Interviewbit - N3RepeatNumber
 */

function n3RepeatNumber(array: number[]): number {
  const l: number = array.length;
  const count: Map<number, number> = new Map<number, number>();

  array.forEach((n: number) => count.set(n, (count.get(n) || 0) + 1));

  let result: number = -1;
  count.forEach((value: number, key: number) => {
    if (value > Math.floor(l / 3) && result === -1) {
      result = key;
    }
  });

  return result;
}

export { n3RepeatNumber };
