/**
 * @url https://www.hackerrank.com/challenges/frog-river-one/problem
 */

function solveFrogRiverOne(x, a) {
  const m = new Map();
  let i = 0;
  for (i = 0; i < a.length && m.size < x; i++) {
    if (!m.has(a[i])) {
      m.set(a[i]);
    }
  }

  return m.size === x ? i - 1 : -1;
}

export { solveFrogRiverOne };
