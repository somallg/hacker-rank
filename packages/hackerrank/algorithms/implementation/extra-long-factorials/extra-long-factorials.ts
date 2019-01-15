/**
 * @url https://www.hackerrank.com/challenges/extra-long-factorials/problem
 */

import { memorized } from '@challenges/util';

interface Carry {
  res: number[];
  carry: number;
}

function toDigits(n: number): number[] {
  if (n < 10) {
    return [n];
  }

  return [n % 10, ...toDigits(Math.floor(n / 10))];
}

function mulNumberArray(n: number, array: number[]): number[] {
  const tmp: Carry = array
    .map((e: number) => e * n)
    .reduce(
      (acc: Carry, e: number) => {
        /* tslint:disable:no-parameter-reassignment */
        e = e + acc.carry;
        if (e > 9) {
          acc.carry = Math.floor(e / 10);
          e = e % 10;
        } else {
          acc.carry = 0;
        }

        acc.res.push(e);

        return acc;
      },
      // tslint:disable-next-line
      <Carry>{ res: [], carry: 0 }
    );

  if (tmp.carry) {
    tmp.res.push(tmp.carry);
  }

  return tmp.res;
}

function combine(array: number[], carry: number): number[] {
  if (array.length === 0) {
    return carry ? [carry] : [];
  }

  // tslint:disable-next-line
  let [head, ...rest]: number[] = array;

  head += carry;
  /* tslint:disable:no-parameter-reassignment */
  carry = 0;

  if (head > 9) {
    carry = Math.floor(head / 10);
    head = head % 10;
  }

  return [head, ...combine(rest, carry)];
}

function addArrayRec(arrayA: number[], arrayB: number[]): number[] {
  if (arrayA.length === 0) {
    return arrayB;
  }
  if (arrayB.length === 0) {
    return arrayA;
  }

  const [headA, ...restA]: number[] = arrayA;
  const [headB, ...restB]: number[] = arrayB;

  return combine([headA + headB, ...addArrayRec(restA, restB)], 0);
}

function paddingLeft(array: number[]): number[] {
  return [0, ...array];
}

function mulArrayRec(arrayA: number[], arrayB: number[]): number[] {
  if (arrayA.length === 0) {
    return [];
  }

  const [head, ...rest]: number[] = arrayA;

  return addArrayRec(
    mulNumberArray(head, arrayB),
    paddingLeft(mulArrayRec(rest, arrayB))
  );
}

function mulArray(arrayA: number[], arrayB: number[]): number[] {
  if (arrayA.length <= arrayB.length) {
    return mulArrayRec(arrayA, arrayB);
  }

  return mulArrayRec(arrayB, arrayA);
}

const solveExtraLongFactorialsRec: (n: number) => number[] = memorized(
  (n: number): number[] => {
    if (n < 2) {
      return [n];
    }

    const digits: number[] = toDigits(n);
    const factN1: number[] = solveExtraLongFactorialsRec(n - 1);

    return mulArray(digits, factN1);
  }
);

function solveExtraLongFactorials(n: number): string {
  return solveExtraLongFactorialsRec(n).reduceRight(
    (acc: string, e: number) => acc.concat(`${e}`),
    ''
  );
}

export {
  toDigits,
  addArrayRec,
  mulNumberArray,
  mulArray,
  solveExtraLongFactorials
};
