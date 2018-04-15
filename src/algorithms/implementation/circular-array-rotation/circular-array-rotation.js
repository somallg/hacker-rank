/**
 * @url https://www.hackerrank.com/challenges/circular-array-rotation/problem
 */

function solveCircularArrayRotation(a, k, m) {
  k %= a.length;
  return m.map(e => a[(e - k + a.length) % a.length]);
}

module.exports = {
  solveCircularArrayRotation
};
