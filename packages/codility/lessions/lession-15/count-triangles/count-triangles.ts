/**
 * Codility - CountTriangles
 */

function solution(arr: number[]): number {
  const n: number = arr.length;
  let result: number = 0;

  arr.sort((a: number, b: number) => a - b);

  for (let x: number = 0; x < n - 2; x = x + 1) {
    let z: number = x + 2;
    for (let y: number = x + 1; y < n - 1; y = y + 1) {
      while (z < n && arr[x] + arr[y] > arr[z]) {
        z = z + 1;
      }
      result = result + (z - y - 1);
    }
  }

  return result;
}

export { solution };
