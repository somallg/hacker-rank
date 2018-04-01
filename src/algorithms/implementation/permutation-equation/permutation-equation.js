/**
 * @url https://www.hackerrank.com/challenges/permutation-equation/problem
 */

function solvePermutationEquation(p) {
  var pp = new Map();
  p.forEach(e => pp.set(p[p[e - 1] - 1], e));

  return Array(p.length)
    .fill()
    .map((e, i) => i + 1)
    .map(e => pp.get(e));
}

module.exports = {
  solvePermutationEquation
};
