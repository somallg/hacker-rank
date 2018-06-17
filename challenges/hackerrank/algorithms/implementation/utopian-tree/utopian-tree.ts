/**
 * @url https://www.hackerrank.com/challenges/utopian-tree/problem
 */

// f(0) => 1
// f(1) => spring => f(0) * 2 = 2
// f(2) => summer => f(1) + 1 = 3
// f(3) => spring => f(2) * 2 = 6
// f(4) => summer => f(3) + 1 = 7
export function solveUtopianTree(n: number): number {
  // native implemation
  if (n === 0) {
    return 1;
  }

  return n % 2 !== 0
    ? solveUtopianTree(n - 1) * 2
    : solveUtopianTree(n - 1) + 1;
}

export function utopianTreeTail(acc: number, n: number): number {
  // tail call implemation
  if (n === 0) {
    return acc;
  }

  return utopianTreeTail(n % 2 !== 0 ? n * 2 : n + 1, n - 1);
}

// f(1, 4) => summer => f(1 + 1, 3)
// f(2, 3) => spring => f(2 * 2, 2)
// f(4, 2) => summer => f(4 + 1, 1)
// f(5, 1) => spring => f(5 * 2, 0)
// f(10, 0) => 10
export function solveUtopianTreeTail(n: number): number {
  return utopianTreeTail(1, n);
}

// f(() => 1, 4) => summer => f(() => (() => 1) + 1), 3)
// f(_, 3) => spring

// ((((() => 1) + 1) * 2) + 1) * 2
export function utopianTreeLazy(acc: Function, n: number): number {
  if (n === 0) {
    return acc();
  }

  return utopianTreeLazy(
    n % 2 !== 0 ? () => acc() * 2 : () => acc() + 1,
    n - 1
  );
}
export function solveUtopianTreeLazy(n: number) {
  return utopianTreeLazy(() => 1, n);
}
