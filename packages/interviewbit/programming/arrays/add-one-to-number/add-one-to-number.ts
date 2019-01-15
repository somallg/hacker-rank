/**
 * Interviewbit - AddOneToNumber
 */

function addOneToNumber(array: number[]): number[] {
  const l: number = array.length;
  if (l === 0) {
    return [1];
  }

  let i: number = l - 1;
  let carry: number = 1;

  while (i >= 0) {
    array[i] = array[i] + carry;
    carry = Math.floor(array[i] / 10);
    array[i] = array[i] % 10;
    i = i - 1;
  }

  if (carry > 0) {
    // tslint:disable-next-line
    array = [carry].concat(array);
  }

  while (array[0] === 0) {
    array.shift();
  }

  return array;
}

export { addOneToNumber };
