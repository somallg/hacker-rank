function nextPeak(arr: number[]): number[] {
  const l: number = arr.length;

  const peaks: boolean[] = arr.map(
    (n: number, index: number) =>
      index > 0 && index < l - 1 && n > arr[index - 1] && n > arr[index + 1]
  );

  const next: number[] = Array(l).fill(0);
  next[l - 1] = -1;

  for (let i: number = l - 2; i > -1; i = i - 1) {
    if (peaks[i]) {
      next[i] = i;
    } else {
      next[i] = next[i + 1];
    }
  }

  return next;
}

function solveFlags(arr: number[]): number {
  const l: number = arr.length;

  const next: number[] = nextPeak(arr);

  let i: number = 1;
  let result: number = 0;

  while ((i - 1) * i <= l) {
    let num: number = 0;
    let index: number = 0;

    while (index < l && num < i) {
      index = next[index];
      if (index === -1) {
        break;
      }
      index = index + i;
      num = num + 1;
    }
    result = Math.max(result, num);
    i = i + 1;
  }

  return result;
}

export { solveFlags };
