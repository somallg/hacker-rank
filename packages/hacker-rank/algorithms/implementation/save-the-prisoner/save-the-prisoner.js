/**
 * @url https://www.hackerrank.com/challenges/save-the-prisoner/problem
 */

function solveSaveThePrisoner(n, m, s) {
  return (m + s - 2) % n + 1;
}

module.exports = {
  solveSaveThePrisoner
};
