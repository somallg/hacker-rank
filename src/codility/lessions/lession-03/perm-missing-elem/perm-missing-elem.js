/**
 * @url https://www.hackerrank.com/challenges/perm-missing-elem/problem
 */

function solvePermMissingElem(a) {
  function add(a, b) {
    return a + b;
  }

  var n = a.length;
  var sumArray = a.reduce(add, 0);
  var sumAllArray = (n + 2) * (n + 1) / 2;

  return sumAllArray - sumArray;
}

module.exports = {
  solvePermMissingElem
};
