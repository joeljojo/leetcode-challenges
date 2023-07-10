/* Problem: Find the Index of the First Occurrence in a String
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 
if needle is not part of haystack. */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // Use the indexOf() to return the first occurence of a substring in a string
  // the indexOf() returns -1 if the substring is not found.
  return haystack.indexOf(needle);
};
