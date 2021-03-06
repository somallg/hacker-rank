function bubbleSort(nums: number[]): number[] {
  let swapped: boolean = false;

  do {
    swapped = false;
    for (let i: number = 0; i < nums.length - 1; i = i + 1) {
      if (nums[i] > nums[i + 1]) {
        swapped = true;
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
  } while (swapped);

  return nums;
}

export { bubbleSort };
