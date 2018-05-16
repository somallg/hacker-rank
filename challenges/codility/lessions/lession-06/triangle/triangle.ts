/**
 */

function solveTriangle(arr: number[]): number {
  const descendingArr = arr.sort((a, b) => b - a);
  const n = descendingArr.length;
  let found = false;

  for (let i = 0; i < n - 2; i = i + 1) {
    if (arr[i] < arr[i + 1] + arr[i + 2]) {
      found = true;
      break;
    }
  }

  return found ? 1 : 0;
}

export { solveTriangle };
