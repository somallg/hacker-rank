/**
 * @url https://www.hackerrank.com/challenges/strange-advertising/problem
 */

var { memorized } = require('../../../util/memorized.js');

function solveStrangeAdvertising(m) {
  var computeLike = memorized((n) => {
    if (n === 1) {
      return 2;
    }

    return Math.floor(computeLike(n - 1) * (3 / 2));
  });

  function sum(a, b) {
    return a + b;
  }

  return Array(m)
    .fill()
    .map((e, i) => i + 1)
    .map(computeLike)
    .reduce(sum, 0);
}

module.exports = {
  solveStrangeAdvertising
};
