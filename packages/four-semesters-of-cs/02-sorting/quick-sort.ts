function quickSort(nums: number[]): number[] {
  const l: number = nums.length;
  if (l <= 1) {
    return nums;
  }

  const pivot: number = nums[l - 1];

  const left: number[] = nums.filter(
    (e: number, i: number) => e <= pivot && i !== l - 1
  );
  const right: number[] = nums.filter(
    (e: number, i: number) => e > pivot && i !== l - 1
  );

  return [...quickSort(left), pivot, ...quickSort(right)];
}

export { quickSort };
