/**Problem: Median of Two Sorted Arrays
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5. */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let nums = nums1.concat(nums2).sort((a, b) => a - b);
  let n = nums.length;
  let median = 0;
  if (n % 2 === 0) {
    let mid = n / 2;
    median = (nums[mid - 1] + nums[mid]) / 2;
  } else {
    let mid = Math.floor(n / 2);
    median = nums[mid];
  }
  return median;
};
