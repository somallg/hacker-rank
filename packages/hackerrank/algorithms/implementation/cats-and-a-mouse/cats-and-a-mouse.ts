/**
 * @url https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
 */

export function solveCatsAndAMouse(x: number, y: number, z: number): string {
  const distanceAtoC: number = Math.abs(x - z); // distance of cat A to mouse C
  const distanceBtoC: number = Math.abs(y - z); // distance of cat B to mouse C

  return distanceAtoC === distanceBtoC
    ? 'Mouse C'
    : distanceAtoC < distanceBtoC
    ? 'Cat A'
    : 'Cat B';
}
