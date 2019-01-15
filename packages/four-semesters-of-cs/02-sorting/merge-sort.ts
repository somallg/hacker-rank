function merge(a: number[], b: number[]): number[] {
  const res: number[] = [];
  let i: number = 0;
  let j: number = 0;

  while (i < a.length || j < b.length) {
    if (a[i] < b[j] || (i < a.length && j === b.length)) {
      res.push(a[i]);
      i = i + 1;
    } else {
      res.push(b[j]);
      j = j + 1;
    }
  }

  return res;
}

function mergeSort(nums: number[]): number[] {
  if (nums.length < 2) {
    return nums;
  }

  const l: number = nums.length;
  const middle: number = Math.floor(l / 2);
  const left: number[] = nums.slice(0, middle);
  const right: number[] = nums.slice(middle, l);

  return merge(mergeSort(left), mergeSort(right));
}

export { mergeSort };
