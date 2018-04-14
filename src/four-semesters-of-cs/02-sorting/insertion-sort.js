function insertionSort(nums) {
  var l = nums.length;
  for (let i = 1; i < l; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        let spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
    }
  }

  return nums;
}

module.exports = {
  insertionSort
};
