/* Problem: Palindrome Number 
Given an integer x, return true if x is a palindrome, and false otherwise. 
Solve without converting the into to a string */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // A negative number cannot be a palindrome
  // if a int ends with a zero and that int is not a zero itself,
  // then it is not a palindrome.
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversedNumber = 0;
  let remainingNumber = x;
  // while
  while (remainingNumber > 0) {
    // Extract last digit
    const lastDigit = remainingNumber % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    remainingNumber = Math.floor(remainingNumber / 10);
  }

  return x === reversedNumber;
};
