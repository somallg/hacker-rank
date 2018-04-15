function quickSort(nums) {
  var l = nums.length;
  if (l <= 1) {
    return nums;
  }

  var pivot = nums[l - 1];

  var left = nums.filter((e, i) => e <= pivot && i !== l - 1);
  var right = nums.filter((e, i) => e > pivot && i !== l - 1);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = {
  quickSort
};
