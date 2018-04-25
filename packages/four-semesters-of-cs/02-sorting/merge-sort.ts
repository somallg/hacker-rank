function merge(a: number[], b: number[]): number[] {
  const res = [];
  for (let i = 0, j = 0; i < a.length || j < b.length; ) {
    if (a[i] < b[j] || (i < a.length && j === b.length)) {
      res.push(a[i]);
      i++;
    } else {
      res.push(b[j]);
      j++;
    }
  }

  return res;
}

function mergeSort(nums: number[]): number[] {
  if (nums.length < 2) {
    return nums;
  }

  const l = nums.length;
  const middle = Math.floor(l / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, l);

  return merge(mergeSort(left), mergeSort(right));
}

export { mergeSort };
