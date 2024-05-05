/**
 * Problem: Largest Positive Integer That Exists With Its Negative
Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

Return the positive integer k. If there is no such integer, return -1.

Example 1:

Input: nums = [-1,2,-3,3]
Output: 3
Explanation: 3 is the only valid k we can find in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    const postiveNegatiesArray = nums.filter((num) => num < 0).map((num) => -num);
    commons = nums.filter((num) => postiveNegatiesArray.includes(num));
    return commons.length === 0 ? -1 : Math.max(...commons);
};