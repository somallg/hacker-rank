/**
 * Interviewbit - TripletsWithSumBetweenGivenRange
 */

function tripletsWithSumBetweenGivenRange(array: string[]): number {
  const l = array.length;
  if (l < 3) {
    return 0;
  }

  let a = Number(array[0]);
  let b = Number(array[1]);
  let c = Number(array[2]);

  for (let i = 3; i < array.length; i++) {
    if (a + b + c > 1 && a + b + c < 2) {
      return 1;
    }

    const n = Number(array[i]);

    if (a + b + c >= 2) {
      if (a > b && a > c) {
        a = n;
      } else if (b > c) {
        b = n;
      } else {
        c = n;
      }
    } else {
      if (a < b && a < c) {
        a = n;
      } else if (b < c) {
        b = n;
      } else {
        c = n;
      }
    }
  }

  if (a + b + c > 1 && a + b + c < 2) {
    return 1;
  }

  return 0;
}

export { tripletsWithSumBetweenGivenRange };
