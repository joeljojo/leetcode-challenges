/* Problem: Search Insert Position
Given a sorted array of distinct integers and a target value, return the index if the target is found.
 If not, return the index where it would be if it were inserted in order.You must write an 
 algorithm with O(log n) runtime complexity. */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // if the array includes target return index of target
  if (nums.includes(target)) {
    return nums.indexOf(target);
  }

  // If target is smaller than the first array element the index of target would be 0
  else if (target < nums[0]) {
    return nums.indexOf(nums[0]); // 0
  }

  // If target is greator than last array element, its target would be the index of
  // last element + 1
  else if (target > nums[nums.length - 1]) {
    return nums.indexOf(nums[nums.length - 1]) + 1;
  }

  // If target would be at the middle of the array, compare the values until
  // the current element is < target and next element is > target. then return the index of next element
  else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < target && nums[i + 1] > target) {
        return i + 1;
      }
    }
  }
};

/** Another intresting Logic
 *
 * 1. if the array contains the target, retun index of target
 * 2. if the array does not conatin the target, add the target at the start of the array
 * 3. Sort the array in ascending order and then return the index of the target element.
 */
