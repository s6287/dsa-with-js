// LeetCode 75 - Sort Colors
// Pattern: Dutch National Flag (Three Pointers)

var sortColor = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let curr = 0;

  while (curr <= right) {
    if (nums[curr] === 0) {
      [nums[left], nums[curr]] = [nums[curr], nums[left]];
      left++;
      curr++;
    } else if (nums[curr] === 2) {
      [nums[right], nums[curr]] = [nums[curr], nums[right]];
      right--;
    } else {
      curr++;
    }
  }
  return nums; // <- return the sorted array for testing in vs code
};

console.log(sortColor([1, 2, 0, 2, 1]));
