/**
 * Codility - CountTriangles
 */

function solution(arr: number[]): number {
  const n = arr.length;
  let result = 0;

  arr.sort((a, b) => a - b);

  for (let x = 0; x < n - 2; x = x + 1) {
    let z = x + 2;
    for (let y = x + 1; y < n - 1; y = y + 1) {
      while (z < n && arr[x] + arr[y] > arr[z]) {
        z = z + 1;
      }
      result = result + (z - y - 1);
    }
  }

  return result;
}

export { solution };
