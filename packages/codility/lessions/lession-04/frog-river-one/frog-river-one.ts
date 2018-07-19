/**
 */

function solveFrogRiverOne(x: number, a: number[]): number {
  const m = new Map();
  let i = 0;
  for (i = 0; i < a.length && m.size < x; i = i + 1) {
    if (!m.has(a[i])) {
      m.set(a[i], a[i]);
    }
  }

  return m.size === x ? i - 1 : -1;
}

export { solveFrogRiverOne };
