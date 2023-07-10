/* Problem: Length of Last Word
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring  consisting of non-space characters only. */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // if there is no string s
  if (s.length === 0) {
    return 0;
  }
  // Trim the string to remove whitespaces crom both ends and split it into words

  let words = s.trim().split(" ");

  // get the last word and return its length

  return words[words.length - 1].length;
};
