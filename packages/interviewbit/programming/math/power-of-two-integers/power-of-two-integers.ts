/**
 * PowerOfTwoIntegers
 */

function powerOfTwoIntegers(n: number): number {
  if (n <= 1) {
    return 1;
  }

  let p: number = 2;
  let a: number = 2;

  while (p < 32) {
    a = 2;
    let power: number = a ** p;

    while (power <= n) {
      if (power === n) {
        return 1;
      }
      power = a ** p;
      a = a + 1;
    }

    p = p + 1;
  }

  return 0;
}

export { powerOfTwoIntegers };
