function nextPeak(arr: number[]) {
  const l = arr.length;

  const peaks = arr.map(
    (n, index) =>
      index > 0 && index < l - 1 && n > arr[index - 1] && n > arr[index + 1]
  );

  const next = Array(l).fill(0);
  next[l - 1] = -1;

  for (let i = l - 2; i > -1; i = i - 1) {
    if (peaks[i]) {
      next[i] = i;
    } else {
      next[i] = next[i + 1];
    }
  }

  return next;
}

function solveFlags(arr: number[]): number {
  const l = arr.length;

  const next = nextPeak(arr);

  let i = 1;
  let result = 0;

  while ((i - 1) * i <= l) {
    let num = 0;
    let index = 0;

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
