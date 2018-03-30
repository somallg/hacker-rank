/**
 * @url https://www.hackerrank.com/challenges/strange-advertising/problem
 */

const { memorized } = require('../../../util/memorized.js');

function solveStrangeAdvertising(n) {
  var computeLikeMemorized = memorized(function computeLike(n) {
    if (n === 1) {
      return 2;
    }

    return Math.floor(computeLikeMemorized(n - 1) * (3 / 2));
  });

  function sum(a, b) {
    return a + b;
  }

  return Array(n)
    .fill()
    .map((e, i) => i + 1)
    .map(computeLikeMemorized)
    .reduce(sum, 0);
}

module.exports = {
  solveStrangeAdvertising
};
