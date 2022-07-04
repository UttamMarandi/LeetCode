/**
 * Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

A subarray is a contiguous subsequence of the array.

Input: arr = [1,4,2,5,3]
Output: 58
 */

const arr = [1, 4, 2, 5, 3];

var sumOddLengthSubarrays = function (arr) {
  let output = 0;
  for (let i = 0; i < arr.length; i++) {
    // Iterated through all the elements in array.
    if (i % 2 !== 0) {
      // check for odd index
      for (let j = 0; j < arr.length; j++) {
        if (i + j <= arr.length) {
          // need to check for arr.length b.c i is the big value and we are traversing j , so when i+j >= arr.length means we need to stop. also as i is odd , we will always be dealing with odd array.
          output += arr.slice(j, i + j).reduce((a, b) => (a += b)); // slice and add to get values.
          console.log("output:", output);
        }
      }
    }
  }
  if (arr.length % 2 !== 0) {
    // if arr is an odd array we will not be able to get the sum of entire in above method as i+j >= arr.length.
    // so we get that sum here.
    output += arr.reduce((a, b) => (a += b));
    console.log("output:", output);
  }
  return output;
};

sumOddLengthSubarrays(arr);
