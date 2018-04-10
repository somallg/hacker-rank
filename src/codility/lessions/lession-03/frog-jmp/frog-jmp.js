/**
 * @url https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
 */

function solveFrogJmp(x, y, d) {
  return Math.ceil((y - x) / d);
}

module.exports = {
  solveFrogJmp
};
