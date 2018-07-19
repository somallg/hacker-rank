/**
 * @url https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
 */

function solveFrogJmp(x: number, y: number, d: number): number {
  return Math.ceil((y - x) / d);
}

export { solveFrogJmp };
