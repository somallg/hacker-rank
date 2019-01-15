/**
 */

function solveTriangle(arr: number[]): number {
  const descendingArr: number[] = arr.sort((a: number, b: number) => b - a);
  const n: number = descendingArr.length;
  let found: boolean = false;

  for (let i: number = 0; i < n - 2; i = i + 1) {
    if (arr[i] < arr[i + 1] + arr[i + 2]) {
      found = true;
      break;
    }
  }

  return found ? 1 : 0;
}

export { solveTriangle };
