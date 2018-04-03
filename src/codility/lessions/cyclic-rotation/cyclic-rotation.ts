/**
 * @url https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
 */

export function solveCyclicRotation(a: number[], k: number): number[] {
  return a.map((_, i) => a[(a.length - k + i) % a.length]);
}
