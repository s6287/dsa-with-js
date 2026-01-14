function findDuplicate(nums) {
  let fast = nums[0];
  let slow = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);

  slow = nums[0];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}

// This is Floyd Algorithm or cycle detection based question.
// it is also called slow fast pointer

// It is used to find the first dupliactes just . only one duplicates find
