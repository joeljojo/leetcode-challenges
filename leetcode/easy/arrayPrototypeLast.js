/**Problem: Array Prototype Last
Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

You may assume the array is the output of JSON.parse.

Example 1:

Input: nums = [null, {}, 3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.
Example 2:

Input: nums = []
Output: -1
Explanation: Because there are no elements, return -1. */

Array.prototype.last = function () {
  // Here this keyword referes to the the instance of array which the last function is applied
  // The code extends array prototype.
  return this.length > 0 ? this.pop() : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
