function insertionSort(nums: number[]): number[] {
  const l: number = nums.length;
  for (let i: number = 1; i < l; i = i + 1) {
    for (let j: number = 0; j < i; j = j + 1) {
      if (nums[i] < nums[j]) {
        const spliced: number[] = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
    }
  }

  return nums;
}

export { insertionSort };
