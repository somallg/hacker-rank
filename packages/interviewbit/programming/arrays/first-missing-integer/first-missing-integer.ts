/**
 * Interviewbit - FirstMissingInteger
 */

function firstMissingInteger(array: number[]): number {
  const l = array.length;
  const abs = Math.abs.bind(Math);

  // remove all negative and number more than l
  // tslint:disable-next-line
  array = array.map(n => (n < 0 ? l + 1 : n));

  for (let i = 0; i < l; i = i + 1) {
    const index = abs(array[i]);
    if (index > 0 && index <= l) {
      array[index - 1] = -1 * abs(array[index - 1]);
    }
  }

  let result = 0;
  for (result = 0; result < l; result = result + 1) {
    if (array[result] >= 0) {
      return result + 1;
    }
  }

  return result + 1;
}

export { firstMissingInteger };
