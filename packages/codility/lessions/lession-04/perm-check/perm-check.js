/**
 * @url https://www.hackerrank.com/challenges/perm-check/problem
 */

function solvePermCheck(a) {
  var n = a.length;

  var tmp = Array(n).fill(0);
  return tmp.map((_, i) => ++tmp[a[i] - 1]).every(e => e === 1) ? 1 : 0;
}

export { solvePermCheck };
