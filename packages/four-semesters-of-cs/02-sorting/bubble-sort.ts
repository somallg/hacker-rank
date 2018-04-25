function bubbleSort(nums: number[]): number[] {
  let swapped = false;

  do {
    swapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        swapped = true;
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
  } while (swapped);

  return nums;
}

export { bubbleSort };
