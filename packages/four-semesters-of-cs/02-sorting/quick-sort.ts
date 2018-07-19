function quickSort(nums: number[]): number[] {
  const l = nums.length;
  if (l <= 1) {
    return nums;
  }

  const pivot = nums[l - 1];

  const left = nums.filter((e, i) => e <= pivot && i !== l - 1);
  const right = nums.filter((e, i) => e > pivot && i !== l - 1);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

export { quickSort };
