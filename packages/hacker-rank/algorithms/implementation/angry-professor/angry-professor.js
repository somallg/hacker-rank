/**
 * @url https://www.hackerrank.com/challenges/angry-professor/problem
 */

function solveAngryProfessor(k, n) {
  // filter only stundent on time i.e n[i] <= 0
  return n.filter(e => e <= 0).length >= k ? 'NO' : 'YES';
}

export { solveAngryProfessor };
