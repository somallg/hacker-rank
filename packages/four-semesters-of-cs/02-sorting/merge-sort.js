function mergeSort(nums) {
  if (nums.length < 2) {
    return nums;
  }

  var l = nums.length;
  var middle = Math.floor(l / 2);
  var left = nums.slice(0, middle);
  var right = nums.slice(middle, l);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(a, b) {
  var res = [];
  for (var i = 0, j = 0; i < a.length || j < b.length; ) {
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

module.exports = {
  mergeSort
};
