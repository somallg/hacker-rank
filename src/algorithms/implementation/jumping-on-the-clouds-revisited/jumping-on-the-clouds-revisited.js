/**
 * @url https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem
 */

function solveJumpingOnTheCloudsRevisited(c, k) {
  return c
    .filter((e, i) => i % k === 0)
    .reduce((acc, e) => (e === 1 ? acc - 3 : acc - 1), 100);
}

module.exports = {
  solveJumpingOnTheCloudsRevisited
};
